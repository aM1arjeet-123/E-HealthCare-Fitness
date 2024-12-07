const express = require("express");
const Blog = require("../models/BlogPost");
const Comment = require("../models/Comment");
const User = require("../models/User");
const router = express.Router();
const { auth } = require("../middlerware/auth")
// Middleware to check if the user is authorized (doctor or instructor)
const checkRole = (roles) => {
  return async (req, res, next) => {
    const user = await User.findById(req.user.id);
    console.log(user)
    if (!user || !roles.includes(user.accountType)) {
      return res.status(403).json({ message: "Permission denied" });
    }
    next();
  };
};

// Create a blog (Doctors and Instructors)
router.post("/create", auth,checkRole(["Doctor", "Instructor"]), async (req, res) => {
  try {
    console.log(req.body.data);
    console.log(req.user)
    const { title, content } = req.body.data;
    console.log(title , content)

    const blog = new Blog({
      title,
      content,
      author: req.user.id,
    });
    console.log(blog)
    await blog.save();
    res.status(201).json({ message: "Blog created successfully", blog });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "firstName lastName email");
    res.status(200).json({ blogs });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



// Route to get a blog by its ID


// Like or dislike a blog
router.post("/like-dislike/:blogId",auth, async (req, res) => {
  try {
    const { action } = req.body; // 'like' or 'dislike'
    console.log(req.params)
    console.log(action)
    const blog = await Blog.findById(req.params.blogId);
    console.log(blog)

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    console.log(blog);
    console.log(req.user)

    const user = await User.findById(req.user.id);
    console.log(user)

    if (action === "like") {
      blog.likes.push(user._id);
      blog.dislikes = blog.dislikes.filter((id) => id.toString() !== user._id.toString());
    } else if (action === "dislike") {
      blog.dislikes.push(user._id);
      blog.likes = blog.likes.filter((id) => id.toString() !== user._id.toString());
    }

    await blog.save();
    res.status(200).json({ message: `Blog ${action}d successfully`, blog });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get blogs by user (Doctors and Instructors can see their own blogs)
router.get("/my-blogs",auth, checkRole(["Doctor", "Instructor"]), async (req, res) => {
  try {
    console.log(req.user)
     const blogs = await Blog.find({ author: req.user.id });
    res.status(200).json({ blogs });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Comment on a blog
router.post("/comment/:blogId",auth, async (req, res) => {
  try {
    const { content } = req.body;
    const blog = await Blog.findById(req.params.blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const comment = new Comment({
      content,
      user: req.user.id,
      blog: blog._id,
    });
    await comment.save();

    blog.comments.push(comment._id);
    await blog.save();
    res.status(200).json({ message: "Comment added successfully", comment });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Validate the provided ID
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Blog ID is required",
      });
    }

    // Find the blog by ID
    const blog = await Blog.findById(id)
  .populate("author")
  .populate({
    path: "comments", // Populate the `comments` field
    select: "content", // Include the `content` field from comments
    populate: {
      path: "user", // Populate the `user` field within each comment
      select: "firstName lastName", // Include specific fields from the `user`
    },
  });
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    console.error("Error fetching blog by ID:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

module.exports = router;




