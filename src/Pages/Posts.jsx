import axios from "axios";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { Link } from "react-router-dom";


export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [query, setquery] = useState("");
  const debounce = useDebounce(query, 1000);

  async function getPosts() {
    const { data } = await axios.get(
      "https://dummyjson.com/posts/search?q=" + debounce,
    );
    console.log("data", data.posts);
    setPosts(data.posts);
  }

  useEffect(() => {
    getPosts();
  }, [debounce]);

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={query}
        onChange={(e) => {
          setquery(e.target.value);
        }}
      />
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            {post.tags.map((tag, i) => {
              return <div key={i}> #{tag} </div>;
            })}
             <Link to={"/posts/" + post.id}>Go to details</Link>
          </div>
        );
      })}
    </div>
  );
}
