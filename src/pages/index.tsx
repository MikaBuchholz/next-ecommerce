import type { NextPage } from "next";
import { useRef } from "react";
import BikeSelector from "~/components/BikeSelector/BikeSelector";
import BillingBox from "~/components/BillingBox/BillingBox";
import styles from "~/styles/index.module.css";

const Home: NextPage = () => {
  const billingRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className={styles.topContainer}>
        <BikeSelector />
        <div className={styles.rightContainer}>
          <div className={styles.headline}>
            <h1>
              Over <span className={styles.applyYellow}>20 times</span> in
              Berlin. <span className={styles.applyRed}>Loved</span> and
              respected by{" "}
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
      </div>
      <div className={styles.offerContainer}>
        <h1>
          What We <span className={styles.applyRed}>Offer</span>
        </h1>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.rightBottomContainer}>
          <h1>
            <span className={styles.applyOrange}>You decide the price</span>.
            <span className={styles.applyRed}>Three</span> packages{" "}
            <span className={styles.applyGreen}>tailored</span> to your needs.{" "}
            <span className={styles.applyPurple}>Unbeatable prices</span> and{" "}
            <span className={styles.applyRed}>excellent execution</span> of
            work. Looking for something{" "}
            <span className={styles.applyYellow}>different?</span> Come{" "}
            <span className={styles.applyPurple}>talk</span> with us.
          </h1>
        </div>
        <div ref={billingRef} className={styles.billingContainer}>
          <BillingBox />
        </div>
      </div>
    </div>
  );
};

export default Home;
