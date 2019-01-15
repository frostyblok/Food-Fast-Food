import menuReducer from '../../src/reducers/menuReducer';
import { GET_MENU, SET_STATUS, MENU_ERROR, GET_ONE_MENU } from '../../src/actions/types';

let payload;
const error = 'Request failed with status code 401';
const status = true;
const menu = {id: 1, menu_name: "Fried Plantain", menu_price: 2000, menu_image: "friedplantain.jpg", created_at: "2019-01-12T16:57:11.437Z"}

describe('Menu reducer', () => {
  it('should get all menu', () => {
    expect(menuReducer(
      {menus: []},
      {type: GET_MENU, menu}
    )).toEqual({ type: GET_MENU, menus: menu});
  });

  it('should set status', done => {
    expect(menuReducer(
      undefined,
      { type: SET_STATUS, status }
    )).toEqual({ type: SET_STATUS, loader: true, menus: []});
    done();
  });

  it('should add user menu error', done => {
    expect(menuReducer(
      undefined,
      { type: MENU_ERROR, error }
    )).toEqual({ type: MENU_ERROR, errors: error, menus: [], loader: false});
    done();
  });

  it('should get one menu', done => {
    expect(menuReducer(
      undefined,
      { type: GET_ONE_MENU, menu }
    )).toEqual({ type: GET_ONE_MENU, menu: '', loader: false, menus: [], menu: {"created_at": "2019-01-12T16:57:11.437Z", "id": 1, "menu_image": "friedplantain.jpg", "menu_name": "Fried Plantain", "menu_price": 2000}});
    done();
  });
});