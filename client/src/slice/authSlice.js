import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isAuthenticated:null,
    error:null,
    token:localStorage.getItem('token'),
    loading:false,
    isAuthenticated:null,
    user:null
}
const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        login: (state) => {
            state.loading = true;
          },
          loginSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.error = null;
            state.user=action.payload
          },
          loginFailed: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
            state.user=null
          },
          logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
          },
          resetError: (state) => {
            state.error = null;
          },
        },
})

export const {login,loginFailed,loginSuccess,logout,resetError}=authSlice.actions
export default authSlice.reducer