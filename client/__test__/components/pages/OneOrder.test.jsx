import React from 'react';
import { shallow } from 'enzyme';
import OneOrder from '../../../src/components/pages/OneOrder';

let props;
const setup = () => {
  props = {
    menu: {},
    onConfirm: jest.fn()

  }
  return shallow(<OneOrder {...props} />);
}

describe('one order component', () => {
  const wrapper = setup();
  const action = wrapper.instance();
  it('should render component', () => {
    expect(wrapper.find('div').length).toBe(5);
    expect(wrapper.find('h2').length).toBe(1);
    expect(wrapper.find('h3').length).toBe(1);
    expect(wrapper.find('select').length).toBe(1);
    expect(wrapper.find('option').length).toBe(20);
  });

  it('should set food quantity in the state when the value changes', () => {
    const event = {
      target: {
        name: 'foodQuantity',
        value: 3
      }
    };
    action.handleChange(event);
    expect(action.state.foodQuantity).toEqual(3);
  });

  it('should confirm an order', () => {
    const confirm = jest.spyOn(action, 'handleConfirm');
    action.handleConfirm();
    expect(confirm).toBeCalled();
  });
});
