import React from "react";
import { addToStorage, removeFromWishlist } from "../Utilities/addToDb";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const Wishlist = ({ wishlistProducts, setWishlistProducts }) => {
  // Function to handle removing product
  const handleRemove = (id) => {
    removeFromWishlist(id);
    setWishlistProducts((prev) =>
      prev.filter((item) => item.product_id !== id),
    );
    toast.success("Item removed from wishlist");
  };

  return (
    <div className="p-4">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Wishlist</h2>
      </div>
      {wishlistProducts.length === 0 ? (
        <p className="text-center text-gray-600">No items in the wishlist</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {wishlistProducts.map((product) => (
            <div
              key={product.product_id}
              className="flex flex-col justify-between gap-4 rounded-2xl border border-gray-200 p-4 shadow-sm transition hover:shadow-md lg:flex-row lg:items-center"
            >
              {/* Product Image */}
              <img
                src={product.product_image}
                alt={product.product_title}
                className="w-full rounded-lg object-cover lg:h-44 lg:w-48"
              />

              {/* Product Info */}
              <div className="mt-2 flex flex-grow flex-col gap-2 text-center lg:mt-0 lg:text-left">
                <h3 className="text-lg font-semibold">
                  {product.product_title}
                </h3>
                <p className="text-gray-400">{product.description}</p>
                <p className="font-bold text-gray-700">${product.price}</p>
                <button
                  className="mt-2 max-w-full cursor-pointer rounded-2xl border border-gray-100 bg-[#9538E2] px-6 py-2 text-white hover:bg-white hover:text-[#9538E2] lg:max-w-62"
                  onClick={() => addToStorage(product.product_id)}
                >
                  Add to Cart
                </button>
              </div>

              {/* Trash Icon */}
              <div className="mt-2 flex justify-center lg:mt-0 lg:px-4">
                <FaTrash
                  className="cursor-pointer text-gray-500 hover:text-[#9538E2]"
                  size={20} // small icon
                  onClick={() => handleRemove(product.product_id)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
