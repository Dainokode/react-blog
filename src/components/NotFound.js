import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>404</h1>
            <h2>Sorry, page not found.</h2>
            <Link className="btn" to="/">Go back</Link>
        </div>
     );
}
 
export default NotFound;