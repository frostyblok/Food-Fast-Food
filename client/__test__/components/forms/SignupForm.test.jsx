import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import SignupForm from '../../../src/components/forms/SignupForm';

let props;

const setup = () => {
  props = {
    onChange: jest.fn(),
    onSubmit: jest.fn(),
  }
  return shallow(<SignupForm {...props} />);
};

describe('Login form component', () => {
  it('should render login form', () => {
    const event = {
      target: ""
    }
    const wrapper = setup();
    const email = wrapper.find('input[name="email"]').props().onChange(event);
    const password = wrapper.find('input[name="password"]').props().onChange(event);
    const username = wrapper.find('input[name="user_name"]').props().onChange(event);
    const address = wrapper.find('input[name="address"]').props().onChange(event);
    const submit = wrapper.find('form').props().onSubmit(event);
    expect(wrapper.find('div').length).toBe(6);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('input').length).toBe(5);
    expect(email).toBeUndefined();
    expect(password).toBeUndefined();
    expect(username).toBeUndefined();
    expect(address).toBeUndefined();
    expect(submit).toBeUndefined();
  });
});