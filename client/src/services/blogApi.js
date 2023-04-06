import axios from "axios";
import { isFetching,fetchBlogsSuccess,fetchFailure,fetchUsersSuccess } from "../slice/blogSlice";
const BLOG_URL='http://localhost:8000/blogs'
const GET_ALL=`${BLOG_URL}/user`
const GET_BLOG=`${BLOG_URL}/`


export const CreateBlog=async(data)=>{
    try{
        const token=localStorage.getItem('token')
        console.log(token)
        const config={
            headers:{
                'Content-type':'application/json',
                'Authorization':`Bearer ${token}`
            }
        }
        const response=await axios.post(BLOG_URL,data,config)
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }

}


export const GetBlogs=async()=>{
    try{
        const token=localStorage.getItem('token')
        const config={
            headers:{
                'Content-type':'application/json',
                'Authorization':`Bearer ${token}`
            }
        }
        const response=await axios.get(BLOG_URL,config)
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }

}
export const GetAll=async()=>{
    try{
        const token=localStorage.getItem('token')
        const config={
            headers:{
                'Content-type':'application/json',
                'Authorization':`Bearer ${token}`
            }
        }
        const response=await axios.get(GET_ALL,config)
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }

}


export const fetchBlogsAndUsers = async (dispatch) => {
    try {
        dispatch(isFetching());
        const token=localStorage.getItem('token')
        const config={
            headers:{
                'Content-type':'application/json',
                'Authorization':`Bearer ${token}`
            }
        }
        const [blogs, users] = await Promise.all([
            axios.get(BLOG_URL,config),
            axios.get(GET_ALL,config),
        ]);
        dispatch(fetchBlogsSuccess(blogs.data));
        dispatch(fetchUsersSuccess(users.data));
    } catch (error) {
        dispatch(fetchFailure(error.message));
    }
};


export const GetBlogById=async(id)=>{
    try{
        const token=localStorage.getItem('token')
        const config={
            headers:{
                'Content-type':'application/json',
                'Authorization':`Bearer ${token}`
            }
        }
        const response=await axios.get(GET_BLOG+id,config)
        return response.data
    } catch (error) {
        console.log(error)
    }
}
export const UpdateBlog=async(id,data)=>{
    try{
        const token=localStorage.getItem('token')
        console.log(token)
        const config={
            headers:{
                'Content-type':'application/json',
                'Authorization':`Bearer ${token}`
            }
        }
        const response=await axios.put(GET_BLOG+id,data,config)
        return response.data
    } catch (error) {
        console.log(error)
    }
}
export const DeleteBlog=async(id)=>{
    try{
        const token=localStorage.getItem('token')
        console.log(token)
        const config={
            headers:{
                'Content-type':'application/json',
                'Authorization':`Bearer ${token}`
            }
        }
        const response=await axios.delete(GET_BLOG+id,config)
        return response.data
    } catch (error) {
        console.log(error)
    }
}