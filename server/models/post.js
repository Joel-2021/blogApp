import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String, // URL or file path
    required: false,
  },
  author: {
    type:String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
},{
  timestamps:true
});
const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
