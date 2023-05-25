import { useEffect, useState } from "react";
import styles from "./BackToTop.module.scss";
import { IoMdArrowUp } from "react-icons/io";
const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowButton(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={handleBackToTop} className={styles.btn}>
          <IoMdArrowUp className={styles.icon} />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
