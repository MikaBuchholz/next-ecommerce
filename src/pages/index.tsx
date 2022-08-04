import type { NextPage } from "next";
import { useRef, useState, useEffect } from "react";
import BikeSelector from "~/components/BikeSelector/BikeSelector";
import BillingBox from "~/components/BillingBox/BillingBox";
import styles from "~/styles/index.module.css";

const Home: NextPage = () => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const scrollToRef = useRef<HTMLDivElement>(null);
  const [extraCss, setExtraCss] = useState<
    { billing?: string; headline?: string; text?: string } | undefined
  >(undefined);

  function oberserverCallback(entries: IntersectionObserverEntry[]) {
    const [entry] = entries;
    if (entry?.isIntersecting) {
      setExtraCss({
        billing: styles["applyBillingAnimation"],
        headline: styles["applyHeadlineAnimation"],
        text: styles["applyTextAnimation"],
      });
    }
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    const scrollObserver = new IntersectionObserver(
      oberserverCallback,
      options
    );
    if (bottomRef.current) {
      scrollObserver.observe(bottomRef.current);
    }

    return () => {
      if (bottomRef.current) {
        scrollObserver.unobserve(bottomRef.current);
      }
    };
  }, [bottomRef]);

  return (
    <>
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
                Getting <span className={styles.applyPurple}>your</span> bike
                was never, this easy. Come{" "}
                <span className={styles.applyRed}>visit</span> one of our shops
                in your area.
              </h1>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.searchButton}>Find Shop</button>
              <button
                className={`${styles.searchButton} ${styles.applyEmpty}`}
                onClick={() => {
                  scrollToRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                Billing Plans
              </button>
            </div>
          </div>
        </div>
        <div className={`${styles.offerContainer} ${extraCss?.headline}`}>
          <h1>
            What We <span className={styles.applyRed}>Offer</span>
          </h1>
        </div>
        <div className={styles.bottomContainer}>
          <div ref={bottomRef} className={styles.observer}></div>
          <div className={`${styles.rightBottomContainer} ${extraCss?.text}`}>
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

          <div className={`${styles.billingContainer} ${extraCss?.billing}`}>
            <BillingBox />
          </div>
        </div>
      </div>
      <div ref={scrollToRef} className={styles.observer2}></div>
    </>
  );
};

export default Home;
