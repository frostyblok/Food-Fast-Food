import axios from 'axios';
import { baseUrl } from '../const';
import { PLACE_ORDER, PLACE_ORDER_ERROR } from './types';
import { loaderAction } from './userAction';

const placeOrderAction = (payload) => ({type: PLACE_ORDER, payload});
const placeOrderError = (error) => ({type: PLACE_ORDER_ERROR, error});

export const placeOrder = (order) => dispatch => {
  dispatch(loaderAction(true));
  return axios.post(`${baseUrl}/api/v1/orders`, {...order})
  .then(({data}) => {
    dispatch(placeOrderAction(data));
    dispatch(loaderAction(false));
  })
  .catch(({message}) => {
    console.log('My error>>', message);
    dispatch(placeOrderError(message));
    dispatch(loaderAction(false));
  });
}
