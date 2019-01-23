import React from 'react';
import { shallow } from 'enzyme';
import SideBar from '../../../src/components/common/SideBar';

const wrapper = shallow(<SideBar />);

describe('sidebar component', () => {
  it('should render component', () => {
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('h4').length).toBe(1);
    expect(wrapper.find('ul').length).toBe(1);
    expect(wrapper.find('li').length).toBe(2);
    expect(wrapper.find('Link').length).toBe(2);
  });
});
