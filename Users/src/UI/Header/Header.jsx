
import { NavList } from "../NavList/NavList";
import { SearchBox } from "../SearchBox/SearchBox";
import styles from "./Header.module.css";
export function Header() {
  return (
   <heade className={styles.header}>
    <SearchBox/>
    <NavList/>
   </heade>
  );
}

export default Header;
