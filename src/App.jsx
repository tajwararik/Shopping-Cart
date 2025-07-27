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
      .then((response) => {
        if (response.status >= 400) throw new Error("server error");
        return response.json();
      })
      .then((data) => setProducts(data.products))
      .catch((error) => console.log(error));
  }, []);

  const addToCart = (carts) => {
    setCartList((prevCarts) => [...prevCarts, carts]);
  };

  const updateCartList = (newCartList) => setCartList(newCartList);

  return (
    <>
      <header>
        <Header carts={cartList} />
      </header>

      <main>
        <Outlet context={{ products, addToCart, cartList, updateCartList }} />
      </main>
    </>
  );
}

export default App;
