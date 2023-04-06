import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isSignedUp:null,
    error:null,
    loading:false,
}
const signUpSlice=createSlice({
    name:'signUp',
    initialState,
    reducers:{
        signUp: (state) => {
            state.loading = true;
          },
          signUpSuccess: (state, action) => {
            state.loading = false;
            state.isSignedUp=true;
            state.error = null;
          },
          signUpFailed: (state, action) => {
            state.loading = false;
            state.isSignedUp = false;
            state.error = action.payload.message;
          },
          resetSignUp: (state) => {
            state.error = null;
            state.isSignedUp= null;
            state.loading = null;
          },
        },
})

export const {signUp,signUpFailed,signUpSuccess,resetSignUp}=signUpSlice.actions
export default signUpSlice.reducer