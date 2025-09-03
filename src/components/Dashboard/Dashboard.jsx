import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { getStoredCart, getStoredWishlist } from "../Utilities/addToDb";
import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("cart"); // Default is cart
  const [cartProducts, setCartProducts] = useState([]);
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const allProducts = useLoaderData();

  // ✅ Correct
  useEffect(() => {
    const cart = getStoredCart();
    // console.log("cart", cart);

    const cartItems = allProducts.filter((product) =>
      cart.includes(product.product_id),
    );
    setCartProducts(cartItems);

    const wishlist = getStoredWishlist();
    const wishlistItems = allProducts.filter((product) =>
      wishlist.includes(product.product_id),
    );
    setWishlistProducts(wishlistItems);
  }, [allProducts, getStoredCart, getStoredWishlist]);

  // console.log("cartProducts", cartProducts);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-center gap-2 bg-[#9538E2] p-4 pb-10">
        <h2 className="text-3xl font-bold text-white">Dashboard</h2>
        <p className="max-w-xl text-center text-sm text-gray-100">
          Welcome to the Gadget Heaven Dashboard. Here you can manage your
          products and customers.
        </p>
        <div className="flex gap-6">
          <button
            className={`cursor-pointer rounded-2xl border-1 border-gray-100 px-12 py-2 ${
              activeTab === "cart"
                ? "bg-white font-bold text-[#9538E2]"
                : "bg-[#9538E2] text-white"
            }`}
            onClick={() => {
              const cart = getStoredCart();
              setActiveTab("cart");
              setCartProducts(
                allProducts.filter((product) =>
                  cart.includes(product.product_id),
                ),
              );
            }}
          >
            Cart
          </button>
          <button
            className={`cursor-pointer rounded-2xl border-1 border-gray-100 px-12 py-2 ${
              activeTab === "wishlist"
                ? "bg-white font-bold text-[#9538E2]"
                : "bg-[#9538E2] text-white"
            }`}
            onClick={() => {
              const wishlist = getStoredWishlist();
              setActiveTab("wishlist");
              setWishlistProducts(
                allProducts.filter((product) =>
                  wishlist.includes(product.product_id),
                ),
              );
            }}
          >
            Wishlist
          </button>
        </div>
      </div>
      <div>
        {activeTab === "cart" && (
          <Cart
            cartProducts={cartProducts}
            allProducts={allProducts}
            setCartProducts={setCartProducts}
          />
        )}
        {activeTab === "wishlist" && (
          <Wishlist
            wishlistProducts={wishlistProducts}
            allProducts={allProducts}
            setWishlistProducts={setWishlistProducts}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
