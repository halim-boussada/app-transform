import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    async function getPostDetails() {
      const { data } = await axios.get("https://dummyjson.com/posts/" + id);
      setPost(data);
    }
    getPostDetails();
  }, []);

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      {post?.tags?.map((tag, i) => {
        return <div key={i}> #{tag} </div>;
      })}
      <Link to="/dashboard">go back to posts</Link>
    </div>
  );
}
