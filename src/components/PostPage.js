import { useHistory, useParams } from "react-router";
import useFetch from "../customHooks/useFetch";

const PostPage = () => {
    const { id } = useParams();
    const url = `http://localhost:4000/posts/${id}`;
    const { data: post, isPending, error} = useFetch(url);
    const history = useHistory();

    const handleDelete = () => {
        fetch(url, { method: "DELETE" })
        .then(() => {
            history.push("/");
        })
    }

    return ( 
        <div className="post-page">
            {isPending ? <div className="lds-dual-ring"></div> : error ? <h1>{error}</h1> : 
            <div className="post">
                <div className="post-img">
                    <img src={post.img} alt="hello world"/>
                </div>
                <div className="post-text">
                    <h1 className="post-title">{post.title}</h1>
                    <h4 className="post-author">{post.author}</h4>
                    <p className="post-body">{post.content}</p>
                    <button onClick={handleDelete}>Delete Post</button>
                </div>
            </div>}
        </div>
     );
}
 
export default PostPage;