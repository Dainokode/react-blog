import useFetch from "../customHooks/useFetch";
import PostList from "./PostList";

const Home = () => {
    const url = "http://localhost:4000/posts";
    const { data, isPending, error } = useFetch(url)

    return ( 
        <div className="home">
            {isPending ? <div className="lds-dual-ring"></div> : error ? <h1>{error}</h1> : !data ? <h1>Could not fetch data.</h1> : <PostList data={data} />}
        </div>
     );
}
 
export default Home;