import Blog from "../models/post.js";
import asyncHandler from "express-async-handler";

//CREATE NEW BLOG
export const CreateBlog = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  const blog = new Blog({ title, content,user:req.user.id });
  await blog.save();
  res.status(201).json({ message: "Blog posted successfully" });
});


//UPDATE EXISTING BLOG
export const UpdateBlog = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  const blogId = req.params.id;

  const blog = await Blog.findById(blogId);

  if (!blog) {
    res.status(404).json({ message: "Blog not found" });
  } else {
    blog.title = title || blog.title;
    blog.content = content || blog.content;

    await blog.save();

    res.status(200).json({ message: "Blog updated successfully" });
  }
});


//GET ALL BLOGS FROM DB
export const GetUserBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find();
  res.status(200).json(blogs);
});

// GET ALL BLOGS OF THE USER
export const GetAllBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({user:req.user._id});
  res.status(200).json(blogs);
});

//GET BLOG BY ID
export const GetBlog = asyncHandler(async (req, res) => {
  const blogId = req.params.id;
  const blog = await Blog.findById(blogId);
  if (!blog) {
    res.status(404).json({
      message: "Blog Not Found",
    });
  } else {
    res.status(200).json(blog);
  }
});


//DELETE BLOG BY ID
export const DeleteBlog = asyncHandler(async (req, res) => {
    const blogId = req.params.id;
    const blog = await Blog.findById(blogId);
    try {
        await blog.deleteOne()
        res.status(200).json({message:"Blog Deleted"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
  });