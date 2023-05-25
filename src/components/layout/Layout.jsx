import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.scss";
import Bootstrap from "./bootstrap";
const Layout = (props) => {
  return (
    <div className={styles.flex}>
      <Bootstrap />
      {/* <Header /> */}
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
