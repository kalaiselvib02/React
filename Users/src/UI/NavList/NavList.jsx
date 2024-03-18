
import styles from  "./NavList.module.css"
export function NavList() {
    return (
     <ul className={styles.navList}>
        <li>Reputation</li>
        <li className={styles.active}>New Users</li>
        <li>Voters</li>
        <li>Editors</li>
        <li>Moderators</li>
     </ul>
    );
  }
  
  export default NavList;
  