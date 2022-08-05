import styles from "./Footer.module.css";
import Image from "next/image";
import github from "~/assets/github.svg";

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <div className={styles.footerNav}>
          <p>Imprint</p>
          <p>Contact</p>
          <p>Press</p>
          <p>About</p>
        </div>

        <div
          className={styles.footerGithub}
          onClick={() => {
            if (window) {
              window?.open("https://github.com/MikaBuchholz", "_blank");
            }
          }}
        >
          <Image src={github} alt="Github" />
        </div>
      </div>
    </div>
  );
}
