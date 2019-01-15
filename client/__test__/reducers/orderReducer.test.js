import orderReducer from "../../src/reducers/orderReducer";
import { PLACE_ORDER, ORDER_ERROR, GET_USER_ORDERS, GET_ONE_ORDER, DELETE_ORDER } from '../../src/actions/types';

const error = 'Request failed with status code 401';
const status = true;
const payload = {id: 1, menu_name: "Fried Plantain", menu_price: 2000, menu_image: "friedplantain.jpg", created_at: "2019-01-12T16:57:11.437Z"}
const order_id = 1;
// const orders = {payload};
let orders;

describe('Order reducer', () => {
  it('should place order', () => {
    expect(orderReducer(
      {order: {}},
      {type: PLACE_ORDER, payload}
    )).toEqual({ type: PLACE_ORDER, order: payload});
  });

  it('should set order error', done => {
    expect(orderReducer(
      undefined,
      { type: ORDER_ERROR, error, order: {}, userOrders: [] }
    )).toEqual({ type: ORDER_ERROR, loader: false, errors: error, order: {}, userOrders: []});
    done();
  });

  it('should get user orders', () => {
    expect(orderReducer(
      {userOrders: []},
      {type: GET_USER_ORDERS, payload}
    )).toEqual({ type: GET_USER_ORDERS, userOrders: payload});
  });

  it('should get one order', () => {
    expect(orderReducer(
      {oneOrder: {}},
      {type: GET_ONE_ORDER, payload}
    )).toEqual({ type: GET_ONE_ORDER, oneOrder: payload});
  });

  it('should delee an order', () => {
    expect(orderReducer(
      {orders: {created_at: "2019-01-12T16:57:11.437Z", id: 1, menu_image: "friedplantain.jpg", menu_name: "Fried Plantain", menu_price: 2000}},
      {userOrders: [orders]},
      {type: DELETE_ORDER, id: order_id}
    )).toEqual({ orders: {created_at: "2019-01-12T16:57:11.437Z", id: 1, menu_image: "friedplantain.jpg", menu_name: "Fried Plantain", menu_price: 2000}})
  });
});