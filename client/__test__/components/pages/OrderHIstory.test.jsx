import React from 'react';
import { shallow } from 'enzyme';
import { OrderHistory } from '../../../src/components/pages/OrderHistory';

let props;
const setup = () => {
  props = {
    loader: {},
    orders: {},
    getUserOrders: jest.fn(),
    history: [],
    handleDelete: jest.fn()

  }
  return shallow(<OrderHistory {...props} />);
}

describe('Order history component', () => {
  const wrapper = setup();
  const action = wrapper.instance();
  it('should render component', () => {
    expect(wrapper.find('section').length).toBe(1);
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('SideBar').length).toBe(1);
    expect(wrapper.find('FlexContainer').length).toBe(1);
    expect(wrapper.find('h4').length).toBe(1);
    expect(wrapper.find('ul').length).toBe(1);
    expect(wrapper.find('Main').length).toBe(1);
  });

  it('should delete an order', () => {
    const history = jest.spyOn(action, 'handleDelete');
    action.handleDelete();
    expect(history).toBeCalled();
  });
});
