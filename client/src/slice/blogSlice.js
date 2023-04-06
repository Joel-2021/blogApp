import { createSlice } from "@reduxjs/toolkit";

const initialState={
    error:null,
    loading:false,
    allBlogs:[],
    allUsers:[]
}

const blogSlice=createSlice({
    name:'blog',
    initialState,
    reducers:{
        isFetching: (state) => {
            state.loading = true;
        },
        fetchBlogsSuccess: (state, action) => {
            state.loading = false;
            state.allBlogs = action.payload;
            state.allUsers=state.allUsers;
            state.error = null;
        },
        fetchUsersSuccess: (state, action) => {
            state.loading = false;
            state.allUsers = action.payload;
            state.allBlogs=state.allBlogs;
            state.error = null;
        },
        fetchFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { isFetching, fetchBlogsSuccess, fetchUsersSuccess, fetchFailure } = blogSlice.actions;
export default blogSlice.reducer