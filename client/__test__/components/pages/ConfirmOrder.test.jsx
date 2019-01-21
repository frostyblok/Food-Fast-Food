import React from 'react';
import { shallow } from 'enzyme';
import { ConfirmOrderPage } from '../../../src/components/pages/ConfirmOrderPage';

let props;
const setup = () => {
  props = {
    menu: {order: {food_name: "Fried Rice", food_price: 16000, id: 24}, status: 'Success'},
    orders: {},
    placeOrder: jest.fn(),
    history: [],
    placedOrder: {},
    onConfirmOrder: jest.fn(),
    getOneMenu: jest.fn()

  }
  return shallow(<ConfirmOrderPage {...props} />);
}

describe('Confirm order component', () => {
  const wrapper = setup();
  const action = wrapper.instance();
  it('should render component', () => {
    expect(wrapper.find('div').length).toBe(6);
    expect(wrapper.find('section').length).toBe(1);
    expect(wrapper.find('OneOrder').length).toBe(1);
  });

  it('should render spinner', () => {
    wrapper.setProps({
      menu: null
    });
    expect(wrapper.find('Spinner').length).toBe(1);
  });

  it('should delete an order', () => {
    const confirm = jest.spyOn(action, 'onConfirmOrder');
    action.onConfirmOrder();
    expect(confirm).toBeCalled();
  });
});