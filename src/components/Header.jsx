import logo from "../assets/logo.png";
import Navbar from "./Navbar";
import { GiShoppingCart } from "react-icons/gi";
import styles from "../styles/Header.module.css";

function Header() {
  const buttons = ["Home", "Shop", "About"];

  return (
    <>
      <section>
        <img src={logo} alt="Logo" />
        <h1>ReactCart</h1>
      </section>

      <Navbar className={styles.navbar} buttons={buttons} />

      <GiShoppingCart className={styles.shoppingCart} />
    </>
  );
}

export default Header;
