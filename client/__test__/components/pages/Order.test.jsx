import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import { OrderPage } from '../../../src/components/pages/OrderPage';

const mockStore = configureStore([thunk]);

let props;
const setup = () => {
  props = {
    getAllMenu: jest.fn(),
    menuList: {}
  }
  return shallow(<OrderPage {...props} />);
}

describe('Order page component', () => {
  const wrapper = setup();
  it('should render component', () => {
    expect(wrapper.find('section').length).toBe(1);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('SideBar').length).toBe(1);
    expect(wrapper.find('MainBar').length).toBe(1);
  });
});
