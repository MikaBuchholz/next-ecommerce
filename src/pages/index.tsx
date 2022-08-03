import type { NextPage } from "next";
import { useRef } from "react";
import BikeSelector from "~/components/BikeSelector/BikeSelector";
import BillingBox from "~/components/BillingBox/BillingBox";
import styles from "~/styles/index.module.css";

const Home: NextPage = () => {
  const billingRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className={styles.leftContainer}>
        <div className={styles.center}>
          <h1 className={styles.buildHeadline}>
            Create <span className={styles.your}>Your</span> Bike
          </h1>
        </div>
        <div className={styles.center}>
          <p>
            Bike <span className={styles.applyOrange}>Style</span>
          </p>
        </div>
        <BikeSelector />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.headline}>
          <h1>
            Over <span className={styles.applyYellow}>20 times</span> in Berlin.
            Loved and respected by{" "}
            <span className={styles.applyGreen}>
              customers and competition.
            </span>{" "}
            Getting <span className={styles.applyPurple}>your</span> bike was
            never, this easy. Come{" "}
            <span className={styles.applyRed}>visit</span> one of our shops in
            your area.
          </h1>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.searchButton}>Find Shop</button>
          <button
            className={`${styles.searchButton} ${styles.applyEmpty}`}
            onClick={() => {
              billingRef?.current!.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Billing Plans
          </button>
        </div>
      </div>

      <div className={styles.rightBottomContainer}>
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing.</div>
        <div>
          Quia modi architecto aperiam asperiores, explicabo perferendis!
        </div>
        <div>Eaque nam, distinctio assumenda laboriosam reiciendis quod.</div>
        <div>
          Eaque beatae accusantium cupiditate aspernatur. Suscipit, iste.
        </div>
        <div>Possimus qui odio facere adipisci, labore aperiam.</div>
      </div>
      <div ref={billingRef} className={styles.billingContainer}>
        <BillingBox />
      </div>
    </div>
  );
};

export default Home;
