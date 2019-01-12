import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import { LoginPage } from '../../../src/components/pages/LoginPage.jsx';

const mockStore = configureStore([thunk]);

let props;
const setup = () => {
  props = {
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    currentUser: {},
    signinUser: jest.fn()
  }
  return shallow(<LoginPage {...props} />);
}

describe('Login page component', () => {
  const wrapper = setup();
  const action = wrapper.instance();
  it('should render component', () => {
    expect(wrapper.find('section').length).toBe(1);
    expect(wrapper.find('div').length).toBe(8);
    expect(wrapper.find('LoginForm').length).toBe(1);
  });

  it('should set email in the local state', () => {
    const event = {
      target: {
        id: 'email',
        value: 'frosty@gmail.com',
      }
    }
    action.onChange(event);
    expect(action.state.email).toEqual('frosty@gmail.com');
  });

  it('should set password in the local state', () => {
    const event = {
      target: {
        id: 'password',
        value: 'sakamanje',
      }
    }
    action.onChange(event);
    expect(action.state.password).toEqual('sakamanje');
  });

  it('should login a user when form is submitted', () => {
    const login = jest.spyOn(action, 'loginUser');
    action.loginUser({preventDefault: () => 1});
    expect(login).toBeCalled();
  });
});
