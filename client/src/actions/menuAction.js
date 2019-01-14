import axios from 'axios';
import { GET_MENU, MENU_ERROR } from './types';
import { baseUrl } from '../const';
import getStorage from '../helpers/getStorage';
import { loaderAction } from './userAction';

const getAllMenuAction = (menu) => ({type: GET_MENU, menu});
export const menuError = (error) => ({ type: MENU_ERROR, error});
const myToken = getStorage('token');


export const getAllMenu = () => dispatch => {
  dispatch(loaderAction(true));
  axios.defaults.headers.common['x-access-token'] = myToken;
  return axios.get(`${baseUrl}/api/v1/menu`)
  .then(({data: {allMenu}}) => {
    dispatch(getAllMenuAction(allMenu));
    dispatch(loaderAction(false));
  })
  .catch(({message}) => {
    dispatch(menuError(message));
    dispatch(loaderAction(false));
  });
}
