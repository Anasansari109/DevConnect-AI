import Post from "../models/Post.js";

export const createPost = async (req, res) => {
  try {
    const post = await Post.create({
      userId: req.user.id,
      content: req.body.content,
    });

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Error creating post" });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("userId", "name email");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
};

export const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post.userId.toString() !== req.user.id) {
    return res.status(403).json({ message: "Not allowed" });
  }

  await post.deleteOne();
  res.json({ message: "Post deleted" });
};

export const likePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.likes += 1;
  await post.save();
  res.json(post);
};