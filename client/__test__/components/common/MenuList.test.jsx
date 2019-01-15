import React from 'react';
import { shallow } from 'enzyme';
import MenuList from '../../../src/components/common/MenuList';

let props;

const setup = () => {
  props = {
    meal: [{menu_name: "Fried Rice", menu_price: 16000, menu_price: 24}],
    onOrder: jest.fn(),
  }
  return shallow(<MenuList {...props} />);
}

describe('Menu title component', () => {
  const wrapper = setup();
  const action = wrapper.instance();
  it('should render component', () => {
    expect(wrapper.find('div').length).toBe(3);
    expect(wrapper.find('h4').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('li').length).toBe(1);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('span').length).toBe(1);
  });
});