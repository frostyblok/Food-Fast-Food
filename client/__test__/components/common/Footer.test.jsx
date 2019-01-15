import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../../src/components/common/Footer';


describe('Footer component', () => {
  const wrapper = shallow(<Footer />);
  it('should render component', () => {
    expect(wrapper.find('footer').length).toBe(1);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('h3').length).toBe(1);
  });
});
