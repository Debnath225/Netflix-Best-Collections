import NetflixSeries from "NetflixSeries";
import styles from "Netflix.module.css";
export const App = () => {
  return (
    <section className="container">
      <h1 className={styles["card-heading"]}>List Of Best Netflix Series</h1>
      <NetflixSeries />
    </section>
  );
};
