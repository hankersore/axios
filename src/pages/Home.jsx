import Navbar from "../components/Navbar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";



export default function Home () {
        const [users, setUsers] = useState([]);
        useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    setUsers(response.data);})
}, []); 

        
    return (
        <>
        <Navbar/>
       <div className="cards">
       {users.map((user) => (
        <UserCard
          key={user.id}
          link={user.id}
          name={user.name}
          username={user.username}
          email={user.email}
        />))}
       </div>
        </>
    )
}