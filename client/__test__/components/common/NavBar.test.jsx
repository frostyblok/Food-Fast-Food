import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../../../src/components/common/NavBar';


describe('Navbar component', () => {
  const wrapper = shallow(<NavBar />);
  it('should render component', () => {
    expect(wrapper.find('header').length).toBe(1);
    expect(wrapper.find('div').length).toBe(3);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('Link').length).toBe(3);
  });
});