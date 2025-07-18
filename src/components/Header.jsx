import logo from "../assets/logo.png";
import Navbar from "./Navbar";
import { GiShoppingCart } from "react-icons/gi";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header>
      <section>
        <img src={logo} alt="Logo" />
        <h1>ReactCart</h1>
      </section>

      <Navbar className={styles.navbar} />

      <GiShoppingCart className={styles.shoppingCart} />
    </header>
  );
}

export default Header;
