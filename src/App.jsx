import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products?limit=20")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
