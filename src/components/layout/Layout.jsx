import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.scss";
import Header2 from "./Header2";
const Layout = (props) => {
  return (
    <div className={styles.flex}>
      <Header2 />
      {/* <Header /> */}
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
