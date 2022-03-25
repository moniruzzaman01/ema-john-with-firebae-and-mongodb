import React from "react";
import "./Cart.css";

function Cart({ cart }) {
  console.log("cartComponent", cart);

  let totalProduct = 0;
  let totalPrice = 0;
  let ShippingFee = 0;

  for (const data of cart) {
    totalPrice = totalPrice + data.price;
    ShippingFee = ShippingFee + data.shipping;
  }

  let Tax = totalPrice * 0.1;
  const grnadTotal = totalPrice + ShippingFee + Tax;
  return (
    <div className="cart-container">
      <div className="cart">
        <h2>Cart container</h2>
        <p>Total Products: {totalProduct} </p>
        <p>Total Price: {totalPrice} </p>
        <p>Shipping Fee: {ShippingFee} </p>
        <p>Tax: {Tax} </p>
        <h4>Grand Total: {grnadTotal} </h4>
      </div>
    </div>
  );
}

export default Cart;
