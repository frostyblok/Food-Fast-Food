import React from 'react';
import { shallow } from 'enzyme';
import MenuTitle from '../../../src/components/common/MenuTitle';

let props;

const setup = () => {
  props = {
    menus: [{food_name: "Fried Rice", food_price: 16000, id: 24}],
    onOrder: jest.fn(),
    loader: false,
    meal: {}
  }
  return shallow(<MenuTitle {...props} />);
}

describe('Menu title component', () => {
  const wrapper = setup();

  it('should render component', () => {
    expect(wrapper.find('div').length).toBe(6);
    expect(wrapper.find('ul').length).toBe(1);
    expect(wrapper.find('h4').length).toBe(1);
    expect(wrapper.find('MenuList').length).toBe(1);
  });

  it('should render spinner', () => {
    wrapper.setProps({
      menu: null,
      loader: true
    });
    expect(wrapper.find('Spinner').length).toBe(1);
  });
});
