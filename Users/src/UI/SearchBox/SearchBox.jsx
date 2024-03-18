
import styles from  "./SearchBox.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export function SearchBox() {
    return (
    <>
     <div  className={styles.searchContainer}>
      <div className={styles.searchIcon}>
      <FontAwesomeIcon icon={faSearch} />
      </div>
     
        <input type="search" placeholder="Search Users"/>
     </div>
    </>
    
    );
  }
  
  export default SearchBox;
  