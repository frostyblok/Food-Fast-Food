import React from 'react';
import { shallow } from 'enzyme';
import MainBar from '../../../src/components/common/MainBar';

let props;

const setup = () => {
  props = {
    menus: {},
    onOrder: jest.fn(),
    loader: {}
  }
  return shallow(<MainBar {...props} />);
}

describe('one order component', () => {
  const wrapper = setup();
  it('should render component', () => {
    expect(wrapper.find('Main').length).toBe(1);
    expect(wrapper.find('SearchFood').length).toBe(1);
    expect(wrapper.find('MenuTitle').length).toBe(1);
  });
});
