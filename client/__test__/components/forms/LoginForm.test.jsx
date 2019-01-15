import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../../../src/components/forms/LoginForm.jsx';

let props;

const setup = () => {
  props = {
    onChange: jest.fn(),
    onSubmit: jest.fn(),
  }
  return shallow(<LoginForm {...props} />);
};

describe('Login form component', () => {
  const event = {
    target: ""
  }
  const wrapper = setup();
  const email = wrapper.find('input[name="email"]').props().onChange(event);
  const password = wrapper.find('input[name="password"]').props().onChange(event);
  const submit = wrapper.find('form').props().onSubmit(event);
  it('should render login form', () => {
    expect(wrapper.find('div').length).toBe(5);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('input').length).toBe(3);
    expect(email).toBeUndefined();
    expect(password).toBeUndefined();
    expect(submit).toBeUndefined();
  });
});
