import React from 'react';
import { shallow } from 'enzyme';
import { DeleteOrder } from '../../../src/components/pages/DeleteOrder';

let props;
const setup = () => {
  props = {
    oneOrder: {order: {food_name: "Fried Rice", food_price: 16000, id: 24}, status: 'Success'},
    orders: {},
    getUserOrders: jest.fn(),
    handleDelete: jest.fn(),
    history: [],
    getOneOrder: jest.fn(),
    placedOrder: {},
    deleteOrder: jest.fn()

  }
  return shallow(<DeleteOrder {...props} />);
}

describe('Delete order component', () => {
  const wrapper = setup();
  const action = wrapper.instance();
  it('should render component', () => {
    expect(wrapper.find('div').length).toBe(6);
    expect(wrapper.find('section').length).toBe(1);
    expect(wrapper.find('OneOrderDelete').length).toBe(1);
  });

  it('should render spinner', () => {
    wrapper.setProps({
      oneOrder: null
    });
    expect(wrapper.find('Spinner').length).toBe(1);
  })

  it('should delete an order', () => {
    const check = jest.spyOn(action, 'handleDelete');
    action.handleDelete();
    expect(check).toBeCalled();
  });
});
