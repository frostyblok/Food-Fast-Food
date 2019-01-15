import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import { OrderPage } from '../../../src/components/pages/OrderPage';

const mockStore = configureStore([thunk]);

let props;
const id = 1;
const setup = () => {
  props = {
    getAllMenu: jest.fn(),
    menuList: {},
    handleOrder: jest.fn(),
    history: []
  }
  return shallow(<OrderPage {...props} />);
}

describe('Order page component', () => {
  const wrapper = setup();
  const action = wrapper.instance();
  it('should render component', () => {
    expect(wrapper.find('section').length).toBe(1);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('SideBar').length).toBe(1);
    expect(wrapper.find('MainBar').length).toBe(1);
  });

  it('should place an order for food when button is clicked', () => {
    const orderBtn = jest.spyOn(action, 'handleOrder');
    action.handleOrder(id);
    expect(orderBtn).toBeCalled();
  });
});
