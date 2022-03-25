import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Product from "../product/Product";
import "./Shop.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //   console.log(products);
  const cartBtnHandler = (product) => {
    // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  console.log("cart", cart);

  return (
    <div className="shop">
      <div className="products">
        {products.map((product, key) => (
          <Product
            key={key}
            product={product}
            cartBtnHandler={cartBtnHandler}
          ></Product>
        ))}
      </div>
      <Cart cart={cart}></Cart>
    </div>
  );
}

export default Shop;
