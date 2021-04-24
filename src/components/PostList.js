import { Link } from "react-router-dom";

const PostList = ({ data }) => {
    const url = "http://localhost:4000/posts";

    return ( 
        <>
            {data.map(post => (
                <div className="post-wrapper">
                    <div className="post-list" key={post.id}>
                        <div className="post-text">
                            <h1 className="title">{post.title}</h1>
                            <h3 className="author">{post.author}</h3>
                            <p className="body">{post.content.substring(0, 30) + "[...]"} <Link to={`/post/${post.id}`}>See More</Link></p>
                        </div>
                        <div className="post-img">
                            <img src={post.img} alt="aaa" />
                        </div>
                    </div>
                    <div className="bottom-line"></div>
                </div>
            ))}
        </>
     );
}
 
export default PostList;