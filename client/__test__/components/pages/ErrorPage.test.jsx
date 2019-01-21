import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import ErrorPage from '../../../src/components/pages/ErrorPage';


describe('Error page component', () => {
  const wrapper = shallow(<ErrorPage />);
  it('should render Error page', () => {
    expect(wrapper.find('section').length).toBe(2);
    expect(wrapper.find('div').length).toBe(3);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('h3').length).toBe(2);
  });
});
