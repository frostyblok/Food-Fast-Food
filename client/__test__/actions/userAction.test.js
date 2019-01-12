import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

import { signinUser, signupUser, authError } from "../../src/actions/userAction";
import { LOGIN_USER, SIGNUP_USER, USER_ERROR } from "../../src/actions/types";
import { baseUrl } from "../../src/const";

const mockStore = configureStore([thunk]);
const mockUser = { email: "frosty@gmail.com", password: "ldldsdlsld" };
const mockSignup = { username: 'user', email: 'at@gmail.com', password: '123456', address: 'Lekki' };
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJ1c2VybmFtZSI6ImZyb3N0eSJ9LCJpYXQiOjE1NDY1ODc5ODYsImV4cCI6MTU0NjY3NDM4Nn0.51QP0qA-iI0Ea77WpJ050AwjwwwP-mbEd8e58TiMkNU";

describe("lsdlksdklslksdlkfs", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  jest.setTimeout(10000);

  it("should signin a user", done => {
    const expectedAction = [{
      type: LOGIN_USER,
      payload: {"exp": 1546674386, "iat": 1546587986, "payload": {"id": 5, "username": "frosty"}}
    }];

    moxios.stubRequest(`${baseUrl}/api/v1/auth/login`, {
      status: 200,
      response: {
          token
        }
    });

    const store = mockStore();
    store.dispatch(signinUser(mockUser)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });

  it('should not signin a user', done => {
    moxios.stubRequest(`${baseUrl}/api/v1/auth/login`, {
      status: 401,
      response: { error: 'Request failed with status code 401'}
    });
    const expectedAction = [{ type: USER_ERROR, error: 'Request failed with status code 401'}];
    const store = mockStore();
    store.dispatch(signinUser(mockUser)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });

  it('should signup a new user', done => {
    const expectedAction = [{
      type: SIGNUP_USER,
      payload: {
           "exp": 1546674386,
           "iat": 1546587986,
           "payload": {
             "id": 5,
             "username": "frosty",
           },
         }
    }];
    moxios.stubRequest(`${baseUrl}/api/v1/auth/signup`, {
      status: 200,
      response: {
        token
      }
    });
    const store = mockStore();
    store.dispatch(signupUser(mockSignup)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });
  
  it('should not signup a user', done => {
    moxios.stubRequest(`${baseUrl}/api/v1/auth/signup`, {
      status: 401,
      response: { error: 'Request failed with status code 401'}
    });
    const expectedAction = [{ type: USER_ERROR, error: 'Request failed with status code 401'}];
    const store = mockStore();
    store.dispatch(signupUser(mockSignup)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });
});
