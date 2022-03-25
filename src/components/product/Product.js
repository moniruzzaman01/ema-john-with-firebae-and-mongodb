import React from "react";
import "./Product.css";

function Product({ product, cartBtnHandler }) {
  //   console.log(product);
  const { img, name, seller, price, ratings } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <div className="details">
        <p>{price}</p>
        <p>{seller}</p>
        <p>{ratings}</p>
      </div>
      <button onClick={() => cartBtnHandler(product)}>Add to cart</button>
    </div>
  );
}

export default Product;
