import axios from 'axios'
import { login, loginFailed, loginSuccess } from '../slice/AuthSlice';
import { signUp, signUpFailed, signUpSuccess } from '../slice/signUpSlice';
const URL='http://localhost:8000';
const LOGIN_URL=`${URL}/users/login/`
const SIGNUP_URL=`${URL}/users/register`
export const userLogin = async (dispatch,data,navigate) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      dispatch(login())
      const res = await axios.post(LOGIN_URL, data, config);
      dispatch(loginSuccess(res.data))
      console.log(res.data);
      localStorage.setItem('token',res.data.token)
      navigate('/')
    } catch (error) {
      if (error.response) {
        dispatch(loginFailed(error.response.data.message))
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    }
  };
export const userSignUp = async (dispatch,data) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      dispatch(signUp)
      const res = await axios.post(SIGNUP_URL, data, config);
      console.log(res.data);
      dispatch(signUpSuccess(res.data))
    } catch (error) {
      if (error.response) {
        dispatch(signUpFailed(error.response.data.message))
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    }
  };
