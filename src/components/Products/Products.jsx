import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const products = useLoaderData();

  const categories = [
    "All",
    "Laptops",
    "Accessories",
    "Smart Watches",
    "MacBook",
    "iPhone",
  ];

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category &&
            product.category.toLowerCase() === selectedCategory.toLowerCase(),
        );

  return (
    <div className="container mx-auto mb-20">
      <h1 className="my-8 text-center text-3xl font-bold lg:mb-16">
        Explore Cutting Edge Tech and Accessories
      </h1>
      <div className="flex flex-col items-start justify-center gap-4 lg:flex-row">
        {/* Categories */}
        <div className="hidden w-full flex-col items-center justify-center gap-4 rounded-2xl bg-gray-300 p-6 lg:block lg:w-auto">
          <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`h-12 w-full cursor-pointer rounded-2xl py-2 pr-12 pl-4 text-left whitespace-nowrap transition ${
                  selectedCategory === category
                    ? "bg-[#7b2ac5] text-white"
                    : "bg-[#6b5181] text-white hover:bg-[#7b2ac5]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="w-full">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Product key={product.product_id} product={product} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No products found in this category.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
