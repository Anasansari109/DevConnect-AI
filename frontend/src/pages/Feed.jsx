import { useEffect, useState } from "react";
import { getPosts, likePost, deletePost, improvePost } from "../services/api";

function Feed() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // ❤️ Like
  const handleLike = async (id) => {
    await likePost(id);
    fetchPosts();
  };

  // 🗑 Delete
  const handleDelete = async (id) => {
    await deletePost(id);
    fetchPosts();
  };

  // 🤖 Improve
 const handleImprove = async (post) => {
  const res = await improvePost(post.content);

  // UI update karo
  const updatedPosts = posts.map((p) =>
    p._id === post._id ? { ...p, content: res.improved } : p
  );

  setPosts(updatedPosts);
};

  return (
    <div>
      <h2>All Posts</h2>

      {posts.map((post) => (
        <div key={post._id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <p>{post.content}</p>
          <small>Likes: {post.likes}</small>

          <br />

          <button onClick={() => handleLike(post._id)}>❤️ Like</button>
          <button onClick={() => handleDelete(post._id)}>🗑 Delete</button>
          <button onClick={() => handleImprove(post)}>🤖 Improve</button>
        </div>
      ))}
    </div>
  );
}

export default Feed;