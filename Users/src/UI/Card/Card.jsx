

import styles from  "./Card.module.css"
import  classes from "../Tag/Tag.module.css";
import Tag from "../Tag/Tag";

export function Card({name , city , text , imageUrl , tags}) {
  console.log({tags})
  return (
    <div className={styles.card}>
        <div className={styles.cardContents}>
           <img src={imageUrl} alt="name" /> 
            <div>
            <h2>{name}</h2>
            <p>{city} , {text}</p>
            <div className={classes.tagsContainer}>
                {tags.map((tag , index) => (
                  <Tag key={tag} tag={tag}/> 
                ))}
            </div>
            </div>
        </div>
    </div>
  );
}

export default Card;
