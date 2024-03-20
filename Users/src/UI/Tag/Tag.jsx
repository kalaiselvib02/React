
import styles from "./Tag.module.css"

export default function Tag({tag}) {
  return (
   <p  className={styles.tag}>
    {tag}
   </p>
  );
}

