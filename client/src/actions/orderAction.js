import axios from 'axios';
import toastr from 'toastr';
import jwtDecode from 'jwt-decode';
import { baseUrl } from '../const';
import { PLACE_ORDER, ORDER_ERROR, GET_USER_ORDERS, GET_ONE_ORDER, DELETE_ORDER } from './types';
import { loaderAction } from './userAction';
import getStorage from '../helpers/getStorage';

export const placeOrderAction = (payload) => ({type: PLACE_ORDER, payload});
const getUserOrdersAction = (payload) => ({type:GET_USER_ORDERS, payload});
const getOneOrderAction = (payload) => ({type: GET_ONE_ORDER, payload});
const deleteOrderAction = (id) => ({type: DELETE_ORDER, id});
const orderError = (error) => ({type: ORDER_ERROR, error});



export const placeOrder = (order) => dispatch => {
  dispatch(loaderAction(true));
  const myToken = getStorage('token');
  axios.defaults.headers.common['x-access-token'] = myToken;
  return axios.post(`${baseUrl}/api/v1/orders`, {...order})
  .then(({data: {orders}}) => {
    dispatch(placeOrderAction(orders));
    toastr.success('Completed');
    dispatch(loaderAction(false));
  })
  .catch(({message}) => {
    dispatch(placeOrderError(message));
    dispatch(loaderAction(false));
  });
}

export const getUserOrders = () => dispatch => {
  dispatch(loaderAction(true));
  const myToken = getStorage('token');
  const payload = jwtDecode(myToken);
  const user_id = payload.id;
  axios.defaults.headers.common['x-access-token'] = myToken;
  return axios.get(`${baseUrl}/api/v1/users/${user_id}/orders`)
  .then(({data}) => {
    dispatch(getUserOrdersAction(data));
    dispatch(loaderAction(false));
  })
  .catch(({message}) => {
    dispatch(orderError(message));
    dispatch(loaderAction(false));
  });
}

export const getOneOrder = () => dispatch => {
  dispatch(loaderAction(true));
  const myToken = getStorage('token');
  const order_id = getStorage('order-id');
  axios.defaults.headers.common['x-access-token'] = myToken;
  return axios.get(`${baseUrl}/api/v1/orders/${order_id}`)
  .then(({data}) => {
    dispatch(getOneOrderAction(data));
    dispatch(loaderAction(false));
  })
  .catch(({message}) => {
    dispatch(orderError(message));
    dispatch(loaderAction(false));
  });
}

export const deleteOrder = () => dispatch => {
  dispatch(loaderAction(true));
  const myToken = getStorage('token');
  const order_id = getStorage('order-id');
  axios.defaults.headers.common['x-access-token'] = myToken;
  return axios.delete(`${baseUrl}/api/v1/orders/${order_id}`)
  .then((data) => {
    dispatch(deleteOrderAction(order_id));
    toastr.success('Order Successfully deleted');
    dispatch(loaderAction(false));
  })
  .catch(({message}) => {
    dispatch(orderError(message));
    dispatch(loaderAction(false));
  });
}
