import styles from "./Homepage.module.css";
import Header from "../UI/Header/Header";
import Card from "../UI/Card/Card";
import { useState, useEffect } from "react";
import { APP_CONSTANTS } from "../constants/constants";
import { fetchData } from "../services/fetch.service";

export default function HomePage() {
  const [users, setNewUsers] = useState([]);

  // Function to set the users data
  const assignUsers = async () => {
    const usersData = await fetchData(APP_CONSTANTS.FETCH_URL)
    setNewUsers(usersData.newUsers);
  };

  useEffect(() => {
    assignUsers();
  }, []);
  return (
    <>
      <h1 className={styles.titleText}>Users</h1>
      <Header />
      <div className={styles.cardContainer}>
        {users?.map((user) => (
          <Card key={user.id} {...user} />
        ))}
      </div>
    </>
  );
}


