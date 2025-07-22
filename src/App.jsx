import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://dummyjson.com/products/category/mobile-accessories?select=title,price,images"
    )
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Outlet context={{ products }} />
      </main>
    </>
  );
}

export default App;
