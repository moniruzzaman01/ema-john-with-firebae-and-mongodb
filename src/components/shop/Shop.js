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
  const [totalPage, setTotalPage] = useState(0);
  const [selected, setSelected] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    fetch("http://localhost:5000/totalProducts")
      .then((res) => res.json())
      .then((data) => {
        const totalProducts = data.count;
        const page = Math.ceil(totalProducts / 10);
        setTotalPage(page);
      });
  }, []);

  useEffect(() => {
    fetch(
      `http://localhost:5000/products?page=${selected}&pageSize=${pageSize}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [selected, pageSize]);

  useEffect(() => {
    const storedData = getLocalStorageData();
    const saved = [];
    // console.log(storedData);
    for (const id in storedData) {
      const data = products.find((product) => product._id === id);
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
    const isExist = cart.find((data) => data.id === product._id);
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
    setLocalStorageData(product._id);
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

      <div className="pagination">
        {[...Array(totalPage).keys()].map((pageNumber, index) => (
          <button
            onClick={() => setSelected(pageNumber)}
            className={selected === pageNumber ? "selected" : ""}
            key={index}
          >
            {pageNumber}
          </button>
        ))}
        <select
          defaultValue={10}
          onChange={(e) => setPageSize(e.target.value)}
          name=""
          id=""
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
}

export default Shop;
