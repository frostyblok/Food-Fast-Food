import jwtDecode from 'jwt-decode';
import axios from 'axios';
import toastr from 'toastr';
import { LOGIN_USER, SIGNUP_USER, USER_ERROR, SET_STATUS, LOGOUT } from '../actions/types';
import setStorage from '../helpers/setStorage';
import {baseUrl} from '../const';


const signinUserAction = (payload) => ({ type: LOGIN_USER, payload });
const signupUserAction = (payload) => ({ type: SIGNUP_USER, payload });
export const loaderAction = (status) => ({type: SET_STATUS, status})
export const authError = (error) => ({ type: USER_ERROR, error});
export const logoutAction = () => ({ type: LOGOUT });;

export const signinUser = (user)  => dispatch => {
  dispatch(loaderAction(true));
  return axios.post(`${baseUrl}/api/v1/auth/login`, {...user} )
  .then(({data}) => {
    setStorage('token', data.token);
    const payload = jwtDecode(data.token);
    dispatch(signinUserAction(payload));
    dispatch(loaderAction(false));
  })
  .catch(({response: {data}, message}) => {
    toastr.error(data.message);
    dispatch(authError(message));
    dispatch(loaderAction(false));
  });
} 

export const signupUser = (user) => dispatch => {
  dispatch(loaderAction(true));
  return axios.post(`${baseUrl}/api/v1/auth/signup`, { ...user })
  .then(({data}) => {
    setStorage('token', data.token);
    const payload = jwtDecode(data.token);
    dispatch(signupUserAction(payload));
    dispatch(loaderAction(false));
  })
  .catch(({response: {data}, message}) => {
    toastr.error(data.message);
    dispatch(authError(message));
    dispatch(loaderAction(false));
  });
}

export const logout = () => dispatch => {
  dispatch(logoutAction());
}
