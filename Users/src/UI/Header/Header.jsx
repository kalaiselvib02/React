
import  NavList  from "../NavList/NavList";
import  SearchBox  from "../SearchBox/SearchBox";
import styles from "./Header.module.css";
export default function Header() {
  return (
   <header className={styles.header}>
    <SearchBox/>
    <NavList/>
   </header>
  );
}


