import styles from "./RoadMap.module.css";

interface IRoadMapProps {
  trigger: boolean;
}

export default function RoadMap(props: IRoadMapProps) {
  const { trigger } = props;

  return (
    <>
      <div className={styles.roadMapContainer}>
        <div className={styles.roadMapItemLeft}>
          <p
            className={`${trigger ? styles.applyAnim5 : undefined} ${
              styles.pTag
            }`}
          >
            Ensure Quality
          </p>
          <div
            className={`${styles.circle} ${
              trigger ? styles.applyAnim1 : undefined
            }`}
          ></div>
        </div>

        <div
          className={`${styles.line} ${
            trigger ? styles.applyAnim1 : undefined
          }`}
        ></div>

        <div className={styles.roadMapItemRight}>
          <p></p>
          <div
            className={`${styles.circle} ${
              trigger ? styles.applyAnim2 : undefined
            }`}
          ></div>
          <p
            className={`${trigger ? styles.applyAnim6 : undefined} ${
              styles.pTag
            }`}
          >
            Fast Service
          </p>
        </div>

        <div
          className={`${styles.line} ${
            trigger ? styles.applyAnim2 : undefined
          }`}
        ></div>

        <div className={styles.roadMapItemLeft2}>
          <p
            className={`${trigger ? styles.applyAnim5 : undefined} ${
              styles.pTag
            }`}
          >
            Work Moral
          </p>
          <div
            className={`${styles.circle} ${
              trigger ? styles.applyAnim3 : undefined
            }`}
          ></div>
        </div>
      </div>
    </>
  );
}
