import Image from "next/image";
import styles from "./BillingItem.module.css";

interface IBillingItemProps {
  props: {
    service: string;
    numberOfServices: string;
    seperatorColor: string;
    icon: any;
    index: number;
  };
}

export default function BillingItem(props: IBillingItemProps) {
  const { service, numberOfServices, seperatorColor, icon, index } =
    props.props;
  return (
    <div className={styles.container}>
      <div className={styles.repairs}>
        {service} <Image src={icon} alt={service} />
      </div>
      <p className={styles.p}>{numberOfServices}</p>
      {index !== 2 && (
        <hr
          style={{
            color: seperatorColor,
            border: `1px solid ${seperatorColor};`,
          }}
          className={styles.seperator}
        />
      )}
    </div>
  );
}
