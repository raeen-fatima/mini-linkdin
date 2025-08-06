const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const post = new Post({
      content: req.body.content,
      author: req.user.id,
    });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ msg: "Failed to create post" });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "name").sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch posts" });
  }
};
