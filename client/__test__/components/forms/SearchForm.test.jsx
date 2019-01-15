import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import SearchForm from '../../../src/components/forms/SearchForm';


describe('Login form component', () => {
  const wrapper = shallow(<SearchForm />);
  it('should render login form', () => {
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('input').length).toBe(2);
  });
});
