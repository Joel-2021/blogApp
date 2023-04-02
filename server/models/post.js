import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
        unique: true,
    },
      date: {
        type: Date,
        default: Date.now,
      },
})
const Blog=mongoose.model('Blog',userSchema)
export default Blog