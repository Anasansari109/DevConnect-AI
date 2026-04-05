import express from "express";
import Post from "../models/Post.js";
import { createPost, getPosts, likePost, deletePost } from "../controllers/postController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createPost);
router.get("/", getPosts);

// single post
router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
});

// like
router.put("/:id/like", authMiddleware, likePost);

// delete
router.delete("/:id", authMiddleware, deletePost);

export default router;