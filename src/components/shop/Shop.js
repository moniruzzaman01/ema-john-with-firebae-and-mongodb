import React, { useEffect, useState } from "react";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "../../utilities/fakedb";
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

  useEffect(() => {
    const storedData = getLocalStorageData();
    const saved = [];
    // console.log(storedData);
    for (const id in storedData) {
      const data = products.find((product) => product.id === id);
      if (data) {
        const quantity = storedData[id];
        data.quantity = quantity;
        // console.log(quantity);
        saved.push(data);
      }
    }
    setCart(saved);
  }, [products]);

  //   console.log(products);
  const cartBtnHandler = (product) => {
    const isExist = cart.find((data) => data.id === product.id);
    let newCart = [];
    if (isExist) {
      const rest = cart.filter((data) => data.id !== isExist.id);
      isExist.quantity = isExist.quantity + 1;
      newCart = [...rest, isExist];
      // console.log(rest);
      // console.log(isExist);
    } else {
      console.log("not exist");
      product.quantity = 1;
      newCart = [...cart, product];
    }

    // console.log(product);
    setCart(newCart);
    setLocalStorageData(product.id);
  };

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
