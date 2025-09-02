import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="flex flex-col items-center justify-start gap-4 rounded-lg border border-gray-300 p-4">
      {/* Image - always centered */}
      <div className="flex items-center justify-center rounded-lg border bg-gray-300 p-4">
        <img
          src={product.product_image}
          alt={product.product_title}
          className="h-20 w-20 rounded-lg object-cover md:h-40 md:w-40"
        />
      </div>

      {/* Title, price, and button */}
      <div className="flex w-full flex-col items-center text-center md:items-start md:text-left">
        <h2 className="text-md font-bold md:text-lg">
          {product.product_title}
        </h2>
        <p className="text-sm text-gray-300">Price: {product.price}</p>
        <Link to={`/product/${product.product_id}`}>
          <button className="mt-2 cursor-pointer rounded-lg bg-slate-500 px-4 py-2 text-white">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
