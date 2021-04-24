import { useState } from "react";

import { useHistory } from "react-router-dom";

const NewPost = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [img, setImg] = useState("");
    const [content, setContent] = useState("");
    const [isPending, setIsPending] = useState(false);

    const url = "http://localhost:4000/posts";
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {title, author, img, content};
        
        fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(newPost),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            setIsPending(true);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
        
        // empty input fields
        setTitle("");
        setAuthor("");
        setImg("");
        setContent("");

        // redirect home
        history.push("/");
    }

    return ( 
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <div className="blog-title">
                    <label>Blog Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="blog-author">
                    <label>Blog Author</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <div className="blog-img">
                    <label>Blog Image URL</label>
                    <input type="text" value={img} onChange={(e) => setImg(e.target.value)} required />
                </div>
                <div className="blog-content">
                    <label>Blog Content</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} required ></textarea>
                </div>
                {!isPending ? <input type="submit" value="Add" /> : <input disabled type="submit" value="Adding..." />}
            </form>
        </div>
     );
}
 
export default NewPost;