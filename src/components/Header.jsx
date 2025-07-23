import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Navbar from "./Navbar";
import CartsNumber from "./CartsNumber";
import { GiShoppingCart } from "react-icons/gi";
import styles from "../styles/Header.module.css";

function Header({ carts }) {
  const buttons = ["Home", "Shop", "About"];

  return (
    <>
      <section>
        <img src={logo} alt="Logo" />
        <h1>ReactCart</h1>
      </section>

      <Navbar className={styles.navbar} buttons={buttons} />

      <Link className={styles.noUnderLine} to={"/checkout"}>
        <section>
          <GiShoppingCart className={styles.shoppingCart} />
          {carts.length ? <CartsNumber carts={carts} /> : null}
        </section>
      </Link>
    </>
  );
}

export default Header;
