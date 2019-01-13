import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import { SignUpPage } from '../../../src/components/pages/SignupPage.jsx';

const mockStore = configureStore([thunk]);

let props;
const setup = () => {
  props = {
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    currentUser: {},
    signupUser: jest.fn()
  }
  return shallow(<SignUpPage {...props} />);
}

describe('Login page component', () => {
  const wrapper = setup();
  const action = wrapper.instance();
  it('should render component', () => {
    expect(wrapper.find('section').length).toBe(1);
    expect(wrapper.find('div').length).toBe(8);
    expect(wrapper.find('SignupForm').length).toBe(1);
  });

  it('should set email in the local state', () => {
    const event = {
      target: {
        name: 'email',
        value: 'frosty@gmail.com',
      }
    }
    action.onChange(event);
    expect(action.state.email).toEqual('frosty@gmail.com');
  });

  it('should set password in the local state', () => {
    const event = {
      target: {
        name: 'password',
        value: 'sakamanje',
      }
    }
    action.onChange(event);
    expect(action.state.password).toEqual('sakamanje');
  });

  it('should set email in the local state', () => {
    const event = {
      target: {
        name: 'user_name',
        value: 'frosty',
      }
    }
    action.onChange(event);
    expect(action.state.user_name).toEqual('frosty');
  });

  it('should set password in the local state', () => {
    const event = {
      target: {
        name: 'address',
        value: 'Lekki',
      }
    }
    action.onChange(event);
    expect(action.state.address).toEqual('Lekki');
  });

  it('should signup a user when form is submitted', () => {
    const signup = jest.spyOn(action, 'signUpUser');
    action.signUpUser({preventDefault: () => 1});
    expect(signup).toBeCalled();
  });
});
