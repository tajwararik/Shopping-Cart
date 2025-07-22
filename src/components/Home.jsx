import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <>
      <h1>
        Welcome to <span>ReactCart</span>
      </h1>
      <p>Shopping made smarter.</p>
      <p>Explore. Add. Checkout — all in one lightning-fast experience.</p>

      <Link className={styles.shop} to={"/shop"}>
        <NavButton>Shop</NavButton>
      </Link>
    </>
  );
}

export default Home;
