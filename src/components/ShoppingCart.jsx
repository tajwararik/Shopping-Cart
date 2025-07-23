import styles from "../styles/Shop.module.css";

function ShoppingCart({ product, addToCart }) {
  return (
    <div className={styles.cart}>
      <img src={product.images[0]} alt={product.title} />
      <div className={styles.info}>
        <p>{product.title}</p>
        <p>${product.price}</p>
      </div>
      <button onClick={() => addToCart(product)}>Order</button>
    </div>
  );
}

export default ShoppingCart;
