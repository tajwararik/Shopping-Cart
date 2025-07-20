import NavButton from "./NavButton";
import styles from "../styles/Home.module.css";

function Home({ handleClick }) {
  return (
    <>
      <h1>
        Welcome to <span>ReactCart</span>
      </h1>
      <p>Shopping made smarter.</p>
      <p>Explore. Add. Checkout — all in one lightning-fast experience.</p>

      <div className={styles.shop}>
        <NavButton handleClick={handleClick}>Shop</NavButton>
      </div>
    </>
  );
}

export default Home;
