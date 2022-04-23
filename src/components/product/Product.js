import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

function Product({ product, cartBtnHandler }) {
  // console.log(product.id);
  const { img, name, seller, price, ratings } = product;
  const navigate = useNavigate();
  const navigateToDetails = (id) => {
    navigate(`/shop/${id}`);
  };
  return (
    <div className="product">
      <img onClick={() => navigateToDetails(product.id)} src={img} alt="" />
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
