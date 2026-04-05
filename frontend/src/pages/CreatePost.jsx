import { useState } from "react";
import { createPost } from "../services/api";

function CreatePost() {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await createPost({ content });

    alert(res.message || "Post created");
    console.log(res);
  };

  return (
    <div>
      <h2>Create Post</h2>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write something..."
          onChange={(e) => setContent(e.target.value)}
        />

        <br />

        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CreatePost;