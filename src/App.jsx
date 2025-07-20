import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [isShopClicked, setIsShopClicked] = useState(false);

  useEffect(() => {
    fetch(
      "https://dummyjson.com/products/category/mobile-accessories?select=title,price,images"
    )
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  const handleClick = () => {
    setIsShopClicked((prevState) => !prevState);
  };

  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        {!isShopClicked && <Home handleClick={handleClick} />}
        {isShopClicked && <Shop products={products} />}
      </main>
    </>
  );
}

export default App;
