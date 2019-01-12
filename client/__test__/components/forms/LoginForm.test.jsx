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
  it('should render login form', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(5);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('input').length).toBe(3);
  });
});