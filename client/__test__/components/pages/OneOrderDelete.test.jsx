import React from 'react';
import { shallow } from 'enzyme';
import OneOrderDelete from '../../../src/components/pages/OneOrderDelete';

let props;

const setup = () => {
  props = {
    order: { order: {
      food_name: '',
      food_image: '',
      }
    },
    onConfirm: jest.fn()

  }
  return shallow(<OneOrderDelete {...props} />);
}

describe('one order component', () => {
  const wrapper = setup();
  const action = wrapper.instance();
  it('should render component', () => {
    expect(wrapper.find('div').length).toBe(4);
    expect(wrapper.find('h2').length).toBe(1);
    expect(wrapper.find('h3').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('should confirm delete order', () => {
    const confirm = jest.spyOn(action, 'confirmDelete');
    action.confirmDelete();
    expect(confirm).toBeCalled();
  });
});
