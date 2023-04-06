import { configureStore,combineReducers } from "@reduxjs/toolkit";
import auth from './slice/AuthSlice.js';
import blog from "./slice/blogSlice.js";
import signUp from './slice/signUpSlice.js';

const rootReducer = combineReducers({
    auth: auth,
    blog: blog,
    signUp:signUp,
  });
  
export const store=configureStore({
    reducer:rootReducer
})