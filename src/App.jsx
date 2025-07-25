import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    fetch(
      "https://dummyjson.com/products/category/mobile-accessories?select=title,price,images"
    )
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  const addToCart = (carts) => {
    setCartList((prevCarts) => [...prevCarts, carts]);
  };

  return (
    <>
      <header>
        <Header carts={cartList} />
      </header>

      <main>
        <Outlet context={{ products, addToCart, cartList }} />
      </main>
    </>
  );
}

export default App;
