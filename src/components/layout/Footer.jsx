import styles from "./Footer.module.scss";
import Link from "next/link";
const Footer = () => {
  return (
    <ul className={styles.ul}>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/contact">Contact Us</Link>
      </li>
      <li>
        <Link href="/privacy">Privacy</Link>
      </li>
    </ul>
  );
};

export default Footer;
