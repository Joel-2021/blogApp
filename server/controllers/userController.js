import User from "../models/user.js";
import asyncHandler from 'express-async-handler'
import { generateToken } from "../utils/generateToken.js";
export const register=asyncHandler(async(req,res)=>{
    const {username,email,password}=req.body;

    const userExists=await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('User Already exists')
    }
    const usernameExists=await User.findOne({username})
    if(usernameExists){
        res.status(400)
        throw new Error('Username already exists')
    }
    const user=await User.create({
        username,email,password
    })
    if(user){
        res.status(201).json({
            _id:user._id,
            email:user.email,
            username:user.username,
            isAdmin:user.isAdmin,
            token:generateToken(user._id) 
    })
    }
    else {
        res.status(400)
        throw new Error('Something went wrong')
    }
})

export const login=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email})

    if(user && (await user.matchPassword(password))){
        res.json({
            id:user._id,
            email:user.email,
            username:user.username,
            isAdmin:user.isAdmin, 
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('User not Found')
    }
    
})