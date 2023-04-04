import axios from "axios";
const BLOG_URL='http://localhost:8000/blogs'
const GET_ALL=`${BLOG_URL}/user`


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