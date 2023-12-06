import Navbar from "../components/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ToDo from "../components/ToDo";



export default function Details () {
    const { userId } = useParams();
    const [todos, setTodos] = useState([]);
    useEffect(() => {
     axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((response)=>{
        setTodos(response.data);
  })}, [userId]);

    return (
        <div>

<Navbar/>
{todos.map((todo) => {
  if (todo.userId == userId) {
    return (
      <>
        <div className="todos">
                <ToDo key={todo.id}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}/>
            </div>
      </>
    );
  }
})}
        </div> 
    )
}