import { configureStore } from "@reduxjs/toolkit";
import auth from './slice/AuthSlice.js';
export const store=configureStore({
    reducer:auth
})