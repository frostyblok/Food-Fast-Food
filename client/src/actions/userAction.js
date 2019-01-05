import jwtDecode from 'jwt-decode';
import { LOGIN_USER } from '../actions/types';
import setStorage from '../helpers/setStorage';
const baseUrl = 'https://food-fast-food.herokuapp.com/';

export const signinUser = (user, props)  => dispatch => {
  console.log(user)
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return fetch(`${baseUrl}api/v1/auth/login`, {
    method: 'POST',
    headers,
    body: JSON.stringify(user),
  })
  .then(res => res.json())
  .then((data) => {
    if (data.status === 'Success') {
      setStorage('token', data.token);
      const payload = jwtDecode(data.token);
      dispatch({
        type: LOGIN_USER,
        payload
      });
      // toastr.success('Welcome');
      props.history.push('/Home');
    }
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
}
