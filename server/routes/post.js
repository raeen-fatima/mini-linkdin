const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware"); // ✅ imported as 'auth'
const { createPost, getAllPosts } = require("../controllers/postController");
const Post = require("../models/Post");

router.post("/", auth, createPost);
router.get("/", getAllPosts);

// GET /api/posts/mine
router.get("/mine", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const posts = await Post.find({ user: userId }).sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
