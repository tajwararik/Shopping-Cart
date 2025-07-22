import { useOutletContext } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import styles from "../styles/Shop.module.css";

function Shop() {
  const { products } = useOutletContext();

  return (
    <section className={styles.displayCart}>
      {products.map((product) => (
        <ShoppingCart key={product.id} product={product} />
      ))}
    </section>
  );
}

export default Shop;
