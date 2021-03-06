import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

import { getAllMenu, getOneMenu } from "../../src/actions/menuAction";
import { SET_STATUS, GET_MENU, GET_ONE_MENU, MENU_ERROR } from "../../src/actions/types";
import { baseUrl } from "../../src/const";

const mockStore = configureStore([thunk]);
const menu = {id: 1, menu_name: "Fried Plantain", menu_price: 2000, menu_image: "friedplantain.jpg", created_at: "2019-01-12T16:57:11.437Z"}
const menu_id = 1;

describe('Menu action test', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  jest.setTimeout(10000);
  it('should get all menu', () => {
    moxios.stubRequest(`${baseUrl}/api/v1/menu`, {
      status: 200,
      response: { menus: [menu] }
    });
    const expectedAction = [
      {type: SET_STATUS, status: true},
      {type: GET_MENU, menus: [menu]},
      {type: SET_STATUS, status: false}
    ];
    const store = mockStore();
    store.dispatch(getAllMenu()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should not get all menu', () => {
    moxios.stubRequest(`${baseUrl}/api/v1/menu`, {
      status: 401,
      response: { error: 'Request failed with status code 401'}
    });
    const expectedAction = [
      {type: SET_STATUS, status: true},
      {type: MENU_ERROR, error: 'Request failed with status code 401'},
      {type: SET_STATUS, status: false}
    ];
    const store = mockStore();
    store.dispatch(getAllMenu()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should get one menu', () => {
    moxios.stubRequest(`${baseUrl}/api/v1/menu/${menu_id}`, {
      status: 200,
      response: { menu: menu }
    });
    const expectedAction = [
      {type: SET_STATUS, status: true},
      {type: GET_ONE_MENU, menu: menu},
      {type: SET_STATUS, status: false}
    ];
    const store = mockStore();
    store.dispatch(getOneMenu()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should not get one menu', () => {
    moxios.stubRequest(`${baseUrl}/api/v1/menu/${menu_id}`, {
      status: 401,
      response: { error: 'Request failed with status code 401'}
    });
    const expectedAction = [
      {type: SET_STATUS, status: true},
      {type: MENU_ERROR, error: 'Request failed with status code 401'},
      {type: SET_STATUS, status: false}
    ];
    const store = mockStore();
    store.dispatch(getOneMenu()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
