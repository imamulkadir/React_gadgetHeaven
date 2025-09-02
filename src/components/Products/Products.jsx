import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import Category from "../Category/Category";

const Products = () => {
  const products = useLoaderData();
  console.log(products);

  return (
    <div className="container mx-auto mb-20">
      <h1 className="my-8 text-center text-3xl font-bold lg:mb-16">
        Explore Cutting Edge Tech and Accessories
      </h1>
      <div className="flex flex-col items-start justify-center gap-4 lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-gray-300 p-6">
          <div className="grid grid-cols-2 place-items-start items-start gap-4 lg:grid-cols-1">
            <button className="w-full cursor-pointer rounded-2xl bg-[#9538E2] px-4 py-2 text-left">
              All
            </button>
            <button className="w-full cursor-pointer rounded-2xl bg-[#9538E2] px-4 py-2 text-left">
              Laptops
            </button>
            <button className="w-full cursor-pointer rounded-2xl bg-[#9538E2] px-4 py-2 text-left">
              Accessories
            </button>
            <button className="w-full cursor-pointer rounded-2xl bg-[#9538E2] px-4 py-2 text-left">
              Smart Watches
            </button>
            <button className="w-full cursor-pointer rounded-2xl bg-[#9538E2] px-4 py-2 text-left">
              MacBook
            </button>
            <button className="w-full cursor-pointer rounded-2xl bg-[#9538E2] px-4 py-2 text-left">
              iPhone
            </button>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Product key={product.product_id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <div className="divider mt-30"></div>
    </div>
  );
};

export default Products;
