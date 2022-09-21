import Navbar from "./Header";
import Footer from "./Footer";
import styles from "./Header.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.body}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
