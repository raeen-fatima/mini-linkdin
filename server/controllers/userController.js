const User = require("../models/User");
const Post = require("../models/Post");

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    const posts = await Post.find({ author: req.params.id }).sort({ createdAt: -1 });

    if (!user) return res.status(404).json({ msg: "User not found" });

    res.json({ user, posts });
  } catch (err) {
    res.status(500).json({ msg: "Error fetching profile" });
  }
};
