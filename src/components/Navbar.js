import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <ul className="list">
                <li><Link to="/">Home</Link></li>
                <li className="logo"><Link to="/">AD</Link></li>
                <li><Link to="new">New Post</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;