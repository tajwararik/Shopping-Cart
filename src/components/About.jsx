import styles from "../styles/About.module.css";

function About() {
  return (
    <section className={styles.aboutSection}>
      <article>
        <h1>About This App</h1>
        <p>
          Welcome to your new favorite shopping cart app — built with React,
          powered by caffeine and late-night coding sessions.
        </p>
        <p>
          This project is more than just a list of items and a checkout button.
          It’s a hands-on playground where frontend logic meets real-world use
          cases — from dynamic rendering to state management and component
          reusability.
        </p>
      </article>

      <article>
        <h2>Why It Exists</h2>
        <p>This app was built to:</p>
        <ul>
          <li>Learn and practice React (the fun way).</li>
          <li>
            Handle real-world UI scenarios like updating cart items, conditional
            rendering, and persistent states.
          </li>
          <li>
            Explore how scalable components work in an e-commerce-like setup.
          </li>
        </ul>
      </article>
    </section>
  );
}

export default About;
