import styles from "./Netflix.module.css";

export const SeriseCard = ({ data }) => {
  // console.log(props);
  // const { id, img_url, name, rating, description, cast, genre, watch_url } =
  // props.data;
  const { id, img_url, name, rating, description, cast, genre, watch_url } =
    data;
  const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color: "var(--btn-color)",
    fontWeight: "bold",
    cursor: "pointer",
  };
  const Rating = rating >= 8.5 ? styles.super_hit : styles.average;
  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} alt={id} height="40%" width="40%" />
      </div>
      <div className={styles["card-content"]}>
        <h2>Name: {name}</h2>
        <h3>
          Rating:<span className={`${styles.rating} ${Rating}`}> {rating}</span>
        </h3>
        <p>Summary: {description}</p>
        <p>Gener: {genre.join(", ")}</p>
        <p>Cast: {cast.join(", ")}</p>
        <a href={watch_url} target="_blank">
          <button className={styles.Rating} style={btn_style}>
            Watch Now
          </button>
        </a>
      </div>
    </li>
  );
};
