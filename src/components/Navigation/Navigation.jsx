import styles from "./nav.module.css";
const Navigation = () => {
  return (
    <nav className={styles.navBar}>
      <div>
        <img src="./images/logo.png" alt="Do some Coding" />
      </div>
      <ul className={styles.navBar_ul}>
        <a className={styles.navBar_a} href="/">
          <li>Home</li>
        </a>
        <a className={styles.navBar_a} href="/">
          <li>About</li>
        </a>
        <a className={styles.navBar_a} href="/">
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navigation;
