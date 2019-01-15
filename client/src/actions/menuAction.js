import axios from 'axios';
import { GET_MENU, MENU_ERROR, GET_ONE_MENU } from './types';
import { baseUrl } from '../const';
import getStorage from '../helpers/getStorage';
import { loaderAction } from './userAction';

const getAllMenuAction = (menu) => ({type: GET_MENU, menu});
const getOneMenuAction = (menu) => ({type: GET_ONE_MENU, menu});
export const menuError = (error) => ({ type: MENU_ERROR, error});


export const getAllMenu = () => dispatch => {
  dispatch(loaderAction(true));
  const myToken = getStorage('token');
  axios.defaults.headers.common['x-access-token'] = myToken;
  return axios.get(`${baseUrl}/api/v1/menu`)
  .then(({data: {allMenu}}) => {
    console.log('All menu>>>>>>', allMenu);
    dispatch(getAllMenuAction(allMenu));
    dispatch(loaderAction(false));
  })
  .catch(({message}) => {
    dispatch(menuError(message));
    dispatch(loaderAction(false));
  });
}

export const getOneMenu = () => dispatch => {
  dispatch(loaderAction(true));
  const myToken = getStorage('token');
  const menu_id = getStorage('menu-id');
  axios.defaults.headers.common['x-access-token'] = myToken;
  return axios.get(`${baseUrl}/api/v1/menu/${menu_id}`)
  .then(({data: {menu}}) => {
    dispatch(getOneMenuAction(menu));
    dispatch(loaderAction(false));
  })
  .catch(({message}) => {
    dispatch(menuError(message));
    dispatch(loaderAction(false));
  });
}
