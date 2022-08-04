import type { NextPage } from "next";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import BikeSelector from "~/components/BikeSelector/BikeSelector";
import BillingBox from "~/components/BillingBox/BillingBox";
import ReviewGrid from "~/components/ReviewGrid/ReviewGrid";
import styles from "~/styles/index.module.css";
import RoadMap from "~/components/RoadMap/RoadMap";
import words from "../assets/words.svg";
import bgBike from "../assets/bgBike.svg";

const Home: NextPage = () => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const scrollToRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const [triggerReviewAnimation, setTriggerReviewAnimation] = useState(false);
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

  function reviewCallback(entries: IntersectionObserverEntry[]) {
    const [entry] = entries;
    if (entry?.isIntersecting) {
      setTriggerReviewAnimation(true);
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

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    const scrollObserver = new IntersectionObserver(reviewCallback, options);
    if (reviewRef.current) {
      scrollObserver.observe(reviewRef.current);
    }

    return () => {
      if (reviewRef.current) {
        scrollObserver.unobserve(reviewRef.current);
      }
    };
  }, [reviewRef]);

  return (
    <>
      <div className={styles.bgBike}>
        <div className={styles.image}></div>
      </div>
      <div className={styles.index}>
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
                  if (scrollToRef.current) {
                    scrollToRef.current.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Billing Plans
              </button>
            </div>
          </div>
        </div>
        <div className={styles.offerContainer}>
          <h1
            className={`${styles.offerH1} ${extraCss?.headline}`}
            ref={scrollToRef}
          >
            What We <span className={styles.applyRed}>Offer</span>
          </h1>
        </div>
        <div className={styles.bottomContainer}>
          <div ref={bottomRef} className={styles.observer}></div>
          <div className={styles.observer3}></div>
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
      <div className={styles.observer2}></div>
      <hr className={styles.breaker} />
      <div className={styles.reviewGridWrapper}>
        <div className={styles.reviewH1Wrapper}>
          <h1
            className={`${styles.reviewH1} ${
              triggerReviewAnimation ? styles.applyAnim4 : undefined
            }`}
          >
            What You <span className={styles.applyRed}> Experienced</span>
          </h1>
        </div>

        <p
          className={`${
            triggerReviewAnimation ? styles.applyAnim5 : undefined
          } ${styles.workP}`}
        >
          How <span className={styles.applyBlue}>We</span> Work
        </p>

        <div ref={reviewRef} className={styles.reviewObserver}></div>
        <div className={styles.reviewContentContainerWrapper}>
          <div className={styles.reviewContentContainer}>
            <ReviewGrid trigger={triggerReviewAnimation} />
            <RoadMap trigger={triggerReviewAnimation} />
            <div
              className={`${
                triggerReviewAnimation ? styles.applyAnim7 : undefined
              } ${styles.cluster}`}
            >
              <Image src={words} alt="words" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
