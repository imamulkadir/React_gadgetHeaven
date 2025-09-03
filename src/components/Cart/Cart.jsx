import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Success from "../../assets/Group.png";
import { FaTrash } from "react-icons/fa";
import { removeFromCart } from "../Utilities/addToDb";

const Cart = ({ cartProducts }) => {
  const [cartItems, setCartItems] = useState(cartProducts);
  const [sortedCartProducts, setSortedCartProducts] = useState([]);
  const [sortByPrice, setSortByPrice] = useState(null);

  const [purchaseAmount, setPurchaseAmount] = useState(0);

  useEffect(() => {
    setCartItems(cartProducts);
  }, [cartProducts]);

  // Calculate total cost dynamically
  const totalCost = sortedCartProducts.reduce(
    (sum, product) => sum + product.price,
    0,
  );

  useEffect(() => {
    if (sortByPrice === "asc") {
      const sortedProducts = [...cartItems].sort((a, b) => a.price - b.price);
      setSortedCartProducts(sortedProducts);
    } else if (sortByPrice === "desc") {
      const sortedProducts = [...cartItems].sort((a, b) => b.price - a.price);
      setSortedCartProducts(sortedProducts);
    } else {
      setSortedCartProducts(cartItems);
    }
  }, [sortByPrice, cartItems]);

  const handlePurchase = () => {
    if (sortedCartProducts.length === 0) {
      toast.error("No items in the cart");
      return;
    }
    setPurchaseAmount(totalCost);
    const modal = document.getElementById("my_modal_1");
    if (modal) {
      modal.showModal();
    }

    // Clear states and storage
    setCartItems([]);
    setSortedCartProducts([]);
    setSortByPrice(null);
    localStorage.removeItem("cart");
  };

  // Remove product from cart
  const handleRemove = (id) => {
    removeFromCart(id); // Remove from localStorage
    setCartItems((prev) => prev.filter((item) => item.product_id !== id));
    toast.success("Item removed from cart");
  };

  return (
    <div className="p-4">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        {/* Cart Title */}
        <h2 className="text-center text-2xl font-bold sm:text-left">Cart</h2>

        {/* Total Cost and Buttons */}
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:gap-4">
          {/* Total Cost on top in mobile */}
          <h2 className="text-lg font-semibold">
            {totalCost > 0 ? `Total Cost: $${totalCost}` : "Total Cost: $0"}
          </h2>

          {/* Buttons side by side */}
          <div className="flex gap-2">
            <button
              onClick={() =>
                setSortByPrice(sortByPrice === "asc" ? "desc" : "asc")
              }
              className="cursor-pointer rounded-2xl border border-gray-100 bg-[#9538E2] px-4 py-2 text-white hover:bg-white hover:text-[#9538E2]"
            >
              Sort by price
            </button>

            <button
              onClick={handlePurchase}
              className="cursor-pointer rounded-2xl border border-gray-100 bg-[#9538E2] px-4 py-2 text-white hover:bg-white hover:text-[#9538E2]"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>

      {sortedCartProducts.length === 0 ? (
        <p className="text-center text-gray-600">No items in the cart</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {sortedCartProducts.map((product) => (
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
              </div>

              {/* Trash Icon */}
              <div className="mt-2 flex justify-center lg:mt-0 lg:px-4">
                <FaTrash
                  className="cursor-pointer text-gray-500 hover:text-[#9538E2]"
                  size={20} // smaller icon
                  onClick={() => handleRemove(product.product_id)}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="flex flex-col items-center justify-center gap-4">
            <img src={Success} alt="" />
            <h3 className="text-lg font-bold">Purchase Successful!</h3>
            <div className="divider"></div>
            <p className="text-center text-2xl font-bold">
              Total Cost: ${purchaseAmount}
            </p>
            <p className="text-center">Thank you for your purchase.</p>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn w-full">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Cart;
