
import styles from  "./Homepage.module.css"
import Header from "../UI/Header/Header";
import Card from "../UI/Card/Card";
import { useState, useEffect } from 'react';


export  function HomePage() {
    const [users, setNewUsers] = useState([]);
    
      const fetchInfo = async () => { 
      const response = await fetch('https://mped25d832731ebe9b97.free.beeceptor.com/data');
      const fetchedResponse = await response.json();
      setNewUsers(fetchedResponse.newUsers)
      }

       useEffect(() => {
        fetchInfo();
   
      }, [])
    return (
   <>
        <h1 className={styles.titleText}>Users</h1>
        <Header />
        <div className={styles.cardContainer}>
         {users.map((user) => (
         <Card key={user.id} {...user} />
        ))}
        </div>
   </>
  );
}

export default HomePage;
