import styles from "./BillingBox.module.css";
import paint from "../../assets/paint.svg";
import soap from "../../assets/soap.svg";
import repair from "../../assets/repair.svg";
import Image from "next/image";
import BillingItem from "../BillingItem/BillingItem";

const BillingBoxStyles = [
  {
    bgColor: "#B3B3F1",
    seperatorColor: "#A0A0E5",
    price: "30€",
    numberOfRepairs: "5",
    repaint: "No",
    cleaning: "No",
    title: "Factory Plus",
    mTop: "10vh",
  },
  {
    bgColor: "#DCB6D5",
    seperatorColor: "#C696BD",
    price: "60€",
    numberOfRepairs: "10",
    repaint: "No",
    cleaning: "Yes",
    title: "Factory Silver",
    mTop: "5vh",
  },
  {
    bgColor: "#CF8BA9",
    seperatorColor: "#AC6785",
    price: "90€",
    numberOfRepairs: "30",
    repaint: "Yes",
    cleaning: "Yes",
    title: "Factory Gold",
    mTop: "0",
  },
];

export default function BillingBox() {
  return (
    <div className={styles.billingContainer}>
      {BillingBoxStyles.map((style) => {
        return (
          <div
            className={styles.billingBox}
            key={style.title}
            style={{ backgroundColor: style.bgColor, marginTop: style.mTop }}
          >
            <h1>{style.title}</h1>
            <div className={styles.circle}>{style.price} / m</div>
            <div className={styles.billingItemContainer}>
              <BillingItem
                props={{
                  service: "Number of repairs",
                  numberOfServices: style.numberOfRepairs,
                  seperatorColor: style.seperatorColor,
                  icon: repair,
                  index: 0,
                }}
              />

              <BillingItem
                props={{
                  service: "Repaint",
                  numberOfServices: style.repaint,
                  seperatorColor: style.seperatorColor,
                  icon: paint,
                  index: 1,
                }}
              />

              <BillingItem
                props={{
                  service: "Cleaning",
                  numberOfServices: style.cleaning,
                  seperatorColor: style.seperatorColor,
                  icon: soap,
                  index: 2,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
