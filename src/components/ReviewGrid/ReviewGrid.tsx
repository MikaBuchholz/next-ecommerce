import styles from "./ReviewGrid.module.css";
import Image from "next/image";
import icon from "../../assets/icon.svg";

const itemCss = [styles["m1"], styles["m2"], styles["m3"]];
const content = [
  {
    content:
      "This bike shop is great. I love the service they offer and the bikes they have. I will definitely be coming back.",
    name: "Catalina Ramos",
    tierRank: "Plus",
    animation: styles["applyAnim1"],
  },
  {
    content:
      "I love this bike shop. I've been coming here for a while and I love it.",
    name: "Adan Olvera",
    tierRank: "Silver",
    animation: styles["applyAnim2"],
  },
  {
    content:
      "Bike Factory is your destination for quality, affordable bikes and biking accessories.",
    name: "Daniel Castillo",
    tierRank: "Gold",
    animation: styles["applyAnim3"],
  },
];

interface IReviewGridProps {
  trigger: boolean;
}

export default function ReviewGrid(props: IReviewGridProps) {
  const { trigger } = props;
  const gridItems = Array.from({ length: 3 }).map((_, index) => {
    return index + 1;
  });

  return (
    <div className={styles.grid}>
      {gridItems.map((item, index) => (
        <div
          className={`${styles.gridItem} ${itemCss[index]} ${
            trigger ? content[index]?.animation : undefined
          }`}
          key={index}
        >
          <div className={styles.reviewHeader}>
            <Image src={icon} alt="icon" />
            {content[index]?.name}
          </div>
          <div className={styles.reviewContent}>
            <p>{content[index]?.content}</p>
          </div>
          <div className={styles.reviewFooterWrapper}>
            <div className={styles.reviewFooter}>
              <p>
                Factory{" "}
                <span className={styles.applyRed}>
                  {content[index]?.tierRank}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
