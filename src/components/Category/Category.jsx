import React from "react";

const Category = ({ product }) => {
  return (
    <div className="grid grid-cols-2 place-items-start items-start gap-4 lg:grid-cols-1">
      <button className="rounded-xl bg-[#9538E2] px-4 py-2 text-white">
        All
      </button>
      <button className="btn btn-outline">Laptops</button>
      <button className="btn btn-outline">Accessories</button>
      <button className="btn btn-outline">Smart Watches</button>
      <button className="btn btn-outline">MacBook</button>
      <button className="btn btn-outline">iPhone</button>
    </div>
  );
};

export default Category;
