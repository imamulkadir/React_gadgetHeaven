import { toast } from "react-toastify";

const getStoredCart = () => {
  const storedData = localStorage.getItem("cart");
  // console.log(storedData);
  // console.log(JSON.parse(storedData));
  if (storedData) {
    return JSON.parse(storedData);
  }

  return [];
};

// Remove from cart
export const removeFromCart = (id) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Remove from wishlist
export const removeFromWishlist = (id) => {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlist = wishlist.filter((item) => item !== id);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

const addToStorage = (id) => {
  const storedCart = getStoredCart();

  if (storedCart.includes(id)) {
    toast.error("Product already in cart");
    return;
  } else {
    storedCart.push(id);
    const newCart = JSON.stringify(storedCart);
    localStorage.setItem("cart", newCart);
    toast.success("Product added to cart");
  }
};

const getStoredWishlist = () => {
  const storedData = localStorage.getItem("wishlist");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};

const addToWishlist = (id) => {
  const storedWishlist = getStoredWishlist();
  if (storedWishlist.includes(id)) {
    toast.error("Product already in wishlist");
    return;
  } else {
    storedWishlist.push(id);
    const newWishlist = JSON.stringify(storedWishlist);
    localStorage.setItem("wishlist", newWishlist);
    toast.success("Product added to wishlist");
  }
};

export { getStoredCart, addToStorage, addToWishlist, getStoredWishlist };
