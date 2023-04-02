import axios from 'axios'
const URL='http://localhost:8000';
const LOGIN_URL=`${URL}/users/login/`
const SIGNUP_URL=`${URL}/users/register`
export const userLogin = async (data) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(LOGIN_URL, data, config);
      console.log(res.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    }
  };
export const userSignUp = async (data) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(SIGNUP_URL, data, config);
      console.log(res.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    }
  };
