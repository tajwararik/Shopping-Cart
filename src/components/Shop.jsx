import { useOutletContext } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import styles from "../styles/Shop.module.css";

function Shop() {
  const { products, addToCart } = useOutletContext();

  return (
    <section className={styles.displayCart}>
      {products.map((product) => (
        <ShoppingCart
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </section>
  );
}

export default Shop;
