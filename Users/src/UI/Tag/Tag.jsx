
import styles from "./Tag.module.css"

export function Tag({tag}) {
  console.log({tag})
  return (
   <p  className={styles.tag}>
    {tag}
   </p>
  );
}

export default Tag;
