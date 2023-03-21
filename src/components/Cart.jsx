import React from "react";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const handleReset = () => {
    const cart = document.querySelector(".cart");
    console.log(cart);
    cart.className = "block";
  };
  return (
    <div className="cart flex none">
      <div className="cart-bg w-2/3 fixed z-50 top-0 left-0 h-full"></div>
      <div className="cart-content">
        <div className="content w-1/3 fixed z-50 top-0 right-0 bottom-5 h-full syne">
          <div className="head flex justify-around">
            <h1>Card</h1>
            <NavLink onClick={handleReset} to="">
              Close
            </NavLink>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p>No items found.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
