import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.scss";
import HeaderTwo from "./HeaderTwo";
const Layout = (props) => {
  return (
    <div className={styles.flex}>
      <HeaderTwo />
      {/* <Header /> */}
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
