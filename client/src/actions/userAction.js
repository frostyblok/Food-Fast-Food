import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { LOGIN_USER, SIGNUP_USER } from '../actions/types';
import setStorage from '../helpers/setStorage';
// const baseUrl = 'https://food-fast-food.herokuapp.com';
const baseUrl = 'http://localhost:8000';

const signinUserAction = (payload) => ({ type: LOGIN_USER, payload });
const signupUserAction = (payload) => ({ type: SIGNUP_USER, payload });

export const signinUser = (user)  => dispatch => {
  return axios.post(`${baseUrl}/api/v1/auth/login`, {...user} )
  .then(({data}) => {
    setStorage('token', data.token);
    const payload = jwtDecode(data.token);
    dispatch(signinUserAction(payload));
  })
  .catch((error) => {
    console.log(error);
  });
}

export const signupUser = (user) => dispatch => {
  return axios.post(`${baseUrl}/api/v1/auth/signup`, { ...user })
  .then(({data}) => {
    setStorage('token', data.token);
    const payload = jwtDecode(data.token);
    dispatch(signupUserAction(payload));
  })
  .catch((error) => {
    console.log(error);
  });
}
