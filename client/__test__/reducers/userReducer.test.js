import userReducer from '../../src/reducers/userReducer';
import { LOGIN_USER, SIGNUP_USER, USER_ERROR, SET_STATUS, LOGOUT } from '../../src/actions/types';

let payload;
const error = 'Request failed with status code 401';
const status = true;

describe('user reducer', () => {
  it('should add a login user', done => {
    payload = {
      email: 'frosty@gmail.com',
      password: 'dkfjkfllsf'
    };
    expect(userReducer(
      { user: {}},
      { type: LOGIN_USER, payload }
    )).toEqual({ type: LOGIN_USER, user: payload, isAuthenticated: true});
    done();
  });

  it('should add a signup user', done => {
    payload = {
      username: 'frosty',
      email: 'frosty@gmail.com',
      password: 'fosfifdfsl',
      address: 'Lekki'
    };
    expect(userReducer(
      { user: {}},
      { type: SIGNUP_USER, payload }
    )).toEqual({ type: SIGNUP_USER, user: payload, isAuthenticated: true});
    done();
  });

  it('should add user error', done => {
    expect(userReducer(
      undefined,
      { type: USER_ERROR, error }
    )).toEqual({ type: USER_ERROR, errors: error, user: {},
      isAuthenticated: false, loader: false});
    done();
  });

  it('should set status', done => {
    expect(userReducer(
      undefined,
      { type: SET_STATUS, status }
    )).toEqual({ type: SET_STATUS, user: {},
      isAuthenticated: false, loader: true});
    done();
  });

  it('logout user', done => {
    expect(userReducer(
      undefined,
      { type: LOGOUT }
    )).toEqual({ type: LOGOUT, user: {},
      isAuthenticated: false, loader: false});
    done();
  });
});