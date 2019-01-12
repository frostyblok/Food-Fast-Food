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
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(6);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('input').length).toBe(5);
  });
});