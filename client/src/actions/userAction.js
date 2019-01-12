import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { LOGIN_USER, SIGNUP_USER, USER_ERROR } from '../actions/types';
import setStorage from '../helpers/setStorage';
import {baseUrl} from '../const';


const signinUserAction = (payload) => ({ type: LOGIN_USER, payload });
const signupUserAction = (payload) => ({ type: SIGNUP_USER, payload });
export const authError = (error) => ({ type: USER_ERROR, error});

export const signinUser = (user)  => dispatch => {
  return axios.post(`${baseUrl}/api/v1/auth/login`, {...user} )
  .then(({data}) => {
    setStorage('token', data.token);
    const payload = jwtDecode(data.token);
    dispatch(signinUserAction(payload));
  })
  .catch(({message}) => {
    dispatch(authError(message));
  });
} 

export const signupUser = (user) => dispatch => {
  return axios.post(`${baseUrl}/api/v1/auth/signup`, { ...user })
  .then(({data}) => {
    setStorage('token', data.token);
    const payload = jwtDecode(data.token);
    dispatch(signupUserAction(payload));
  })
  .catch(({message}) => {
    dispatch(authError(message));
  });
}
