import Navbar from "../components/Navbar";
import axios from "axios";
import UserCard from "../components/UserCard";
import { useQuery } from '@tanstack/react-query';


export default function Home () {

function getData () {
    const request = axios.get("https://jsonplaceholder.typicode.com/users")
    return request;
}

const {data, isLoading, isFetching, isError, error} = useQuery({queryKey:['repoData'], queryFn: getData })

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
        <>
        <Navbar/>
       <div className="cards">
       {data?.data.map((user) => (
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