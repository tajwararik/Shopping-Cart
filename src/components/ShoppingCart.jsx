import styles from "../styles/Shop.module.css";

function ShoppingCart({ product }) {
  return (
    <div className={styles.cart}>
      <img src={product.images[0]} alt={product.title} />
      <div className={styles.info}>
        <p>{product.title}</p>
        <p>${product.price}</p>
      </div>
      <button>Order</button>
    </div>
  );
}

export default ShoppingCart;
