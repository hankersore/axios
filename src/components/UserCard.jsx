import './UserCard.css';
import { Link } from 'react-router-dom';



export default function UserCard (props) {

    return (
        <Link to={`/details/${props.link}`}>
            <div className='card'>
            <h2><span>Name:</span> <br />{props.name}</h2>
            <h3><span>Username:</span> <br /> {props.username}</h3>
            <a href='mailto: example@gmail.com'><h3><span>Email Adress:</span> <br />{props.email}</h3></a>
        </div>
        </Link>
    )
}