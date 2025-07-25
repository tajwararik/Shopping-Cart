import { useOutletContext } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";
import styles from "../styles/Checkout.module.css";

function Checkout() {
  const { cartList, updateCartList } = useOutletContext();

  const uniqueCarts = {};

  cartList.forEach((cart) => {
    const key = cart.id;

    if (uniqueCarts[key]) {
      uniqueCarts[key].quantity += 1;
    } else {
      uniqueCarts[key] = { ...cart, quantity: 1 };
    }
  });

  const uniqueCartList = Object.values(uniqueCarts);

  const deleteCart = (cart) => {
    const newCartList = cartList.filter((item) => item.id !== cart.id);
    updateCartList(newCartList);
  };

  const cartListElements = uniqueCartList.map((cart) => {
    return (
      <div key={cart.id} className={styles.cart}>
        <img src={cart.images[0]} alt={cart.title} />
        <div>
          <p>{cart.title}</p>
          <p>${cart.price}</p>
        </div>
        <div className={styles.buttons}>
          <RiDeleteBin6Fill
            className={styles.deleteButton}
            onClick={() => deleteCart(cart)}
          />
          <div>
            <button>+</button>
            <span>{cart.quantity}</span>
            <button>-</button>
          </div>
        </div>
      </div>
    );
  });

  const total = uniqueCartList.reduce(
    (accumulator, cart) => accumulator + cart.price * cart.quantity,
    0
  );

  return (
    <section className={styles.checkoutSection}>
      <div>{cartListElements}</div>
      <div>
        <h3>Order summary</h3>
        <article>
          <p>Total items</p>
          <p>{cartList.length}</p>
        </article>
        <article>
          <p>Total price</p>
          <p>{Math.round(total * 100) / 100}</p>
        </article>
        <button>Proceed to Checkout</button>
      </div>
    </section>
  );
}

export default Checkout;
