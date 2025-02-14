import NetflixSeries from "./components/NetflixSeries";
import styles from "./components/Netflix.module.css";
export const App = () => {
  return (
    <section className="container">
      <h1 className={styles["card-heading"]}>List Of Best Netflix Series</h1>
      <NetflixSeries />
    </section>
  );
};
