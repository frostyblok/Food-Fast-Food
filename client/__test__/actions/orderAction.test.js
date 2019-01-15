import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

import { placeOrder, getUserOrders, getOneOrder, deleteOrder } from "../../src/actions/orderAction";
import { PLACE_ORDER, ORDER_ERROR, GET_USER_ORDERS, GET_ONE_ORDER, SET_STATUS, DELETE_ORDER } from "../../src/actions/types";
import { baseUrl } from "../../src/const";

const mockStore = configureStore([thunk]);
const order = {id: 1, menu_name: "Fried Plantain", menu_price: 2000, menu_image: "friedplantain.jpg", created_at: "2019-01-12T16:57:11.437Z"}
const order_id = 1;

describe('Order action test', () => {
  beforeEach(() => {
    global.toastr = {
      success: () => {}
    };
    moxios.install();
  });
  afterEach(() => moxios.uninstall());
  jest.setTimeout(10000);
  it('should place an order', () => {
    moxios.stubRequest(`${baseUrl}/api/v1/order`, {
      status: 200,
      response: { order: [order] }
    });
    const expectedAction = [
      {type: SET_STATUS, status: true},
      {type: PLACE_ORDER, order: {order}},
      {type: SET_STATUS, status: false}
    ];
    const store = mockStore();
    store.dispatch(placeOrder()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should not place an order', () => {
    moxios.stubRequest(`${baseUrl}/api/v1/order`, {
      status: 401,
      response: { error: 'Request failed with status code 401'}
    });
    const expectedAction = [
      {type: SET_STATUS, status: true},
      {type: ORDER_ERROR, error: 'Request failed with status code 401'},
      {type: SET_STATUS, status: false}
    ];
    const store = mockStore();
    store.dispatch(placeOrder()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should get users list of orders', () => {
    moxios.stubRequest(`${baseUrl}/api/v1/order`, {
      status: 200,
      response: { userOrders: [order] }
    });
    const expectedAction = [
      {type: SET_STATUS, status: true},
      {type: GET_USER_ORDERS, order: {order}},
      {type: SET_STATUS, status: false}
    ];
    const store = mockStore();
    store.dispatch(getUserOrders()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should not get users list of orders', () => {
    moxios.stubRequest(`${baseUrl}/api/v1/order`, {
      status: 401,
      response: { error: 'Request failed with status code 401'}
    });
    const expectedAction = [
      {type: SET_STATUS, status: true},
      {type: ORDER_ERROR, error: 'Request failed with status code 401'},
      {type: SET_STATUS, status: false}
    ];
    const store = mockStore();
    store.dispatch(getUserOrders()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should get one order', () => {
    moxios.stubRequest(`${baseUrl}/api/v1/order/${order_id}`, {
      status: 200,
      response: { order: order }
    });
    const expectedAction = [
      {type: SET_STATUS, status: true},
      {type: GET_ONE_ORDER, order: order},
      {type: SET_STATUS, status: false}
    ];
    const store = mockStore();
    store.dispatch(getOneOrder()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should not get one order', () => {
    moxios.stubRequest(`${baseUrl}/api/v1/order/${order_id}`, {
      status: 401,
      response: { error: 'Request failed with status code 401'}
    });
    const expectedAction = [
      {type: SET_STATUS, status: true},
      {type: GET_ONE_ORDER, error: 'Request failed with status code 401'},
      {type: SET_STATUS, status: false}
    ];
    const store = mockStore();
    store.dispatch(getOneOrder()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should delete order', () => {
    moxios.stubRequest(`${baseUrl}/api/v1/order/${order_id}`, {
      status: 200,
      response: { order: order }
    });
    const expectedAction = [
      {type: SET_STATUS, status: true},
      {type: DELETE_ORDER, order: order},
      {type: SET_STATUS, status: false}
    ];
    const store = mockStore();
    store.dispatch(deleteOrder()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should not delete order', () => {
    moxios.stubRequest(`${baseUrl}/api/v1/order/${order_id}`, {
      status: 401,
      response: { error: 'Request failed with status code 401'}
    });
    const expectedAction = [
      {type: SET_STATUS, status: true},
      {type: DELETE_ORDER, error: 'Request failed with status code 401'},
      {type: SET_STATUS, status: false}
    ];
    const store = mockStore();
    store.dispatch(deleteOrder()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
