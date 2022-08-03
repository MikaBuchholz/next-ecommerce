import { NextPage } from "next";
import styles from "./AppBar.module.css";
import Link from "next/link";

const AppBar: NextPage = () => {
  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>
        <Link href="/">Bike Factory</Link>
      </h1>
      <div className={styles.navigation}>
        <Link href="/about">
          <a className={styles.link}>About</a>
        </Link>
        <Link href="/contact">
          <a className={styles.link}>Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default AppBar;
