import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
           <Link to='/'><h2>Home</h2></Link>
        </nav>
    );
}

export default Navbar;