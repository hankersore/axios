import Navbar from "../components/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ToDo from "../components/ToDo";
import { useQuery } from '@tanstack/react-query';



export default function Details () {
    const { userId } = useParams();
  function getData () {
    const request = axios.get("https://jsonplaceholder.typicode.com/todos")
    return request;
}

const {data, isLoading, isFetching, isError, error} = useQuery({queryKey:['repoData2'], queryFn: getData })

   if (isLoading) {
    return(
        <h1>Loading...</h1>
    )
   }
   if (isError) {
    console.log('error mes', error);
   }
   console.log(data);

    return (
        <div>

<Navbar/>
{data?.data.map((todo) => {
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