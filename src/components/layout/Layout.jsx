import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.scss";
import HeaderTwo from "./HeaderTwo";
import { Montserrat } from "next/font/google";
import { Fragment } from "react";
const font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Layout = (props) => {
  return (
    <div className={font.className}>
      <div className={styles.flex}>
        <HeaderTwo />
        {/* <Header /> */}
        <main className={styles.main}>{props.children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
