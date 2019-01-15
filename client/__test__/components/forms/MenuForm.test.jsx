import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import MenuForm from '../../../src/components/forms/MenuForm';


describe('Login form component', () => {
  const wrapper = shallow(<MenuForm />);
  it('should render login form', () => {
    expect(wrapper.find('div').length).toBe(4);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('input').length).toBe(4);
  });
});