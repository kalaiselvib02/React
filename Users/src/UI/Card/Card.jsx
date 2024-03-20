import styles from "./Card.module.css";
import classes from "../Tag/Tag.module.css";
import Tag from "../Tag/Tag";

export default function Card({ name, city, text, imageUrl, tags }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContents}>
        <img src={imageUrl} alt="name" />
        <div>
          <h2>{name}</h2>
          <p className={styles.cardText}>
            {city} , {text}
          </p>
          <div className={classes.tagsContainer}>
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


