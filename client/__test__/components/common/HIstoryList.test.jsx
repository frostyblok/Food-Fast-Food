import React from 'react';
import { shallow } from 'enzyme';
import HistoryList from '../../../src/components/common/HistoryList';

let props;

const setup = () => {
  props = {
    order: [{menu_name: "Fried Rice", menu_price: 16000, menu_price: 24}],
    onDelete: jest.fn(),
  }
  return shallow(<HistoryList {...props} />);
}

describe('History list component', () => {
  const wrapper = setup();
  const action = wrapper.instance();
  it('should render component', () => {
    expect(wrapper.find('div').length).toBe(5);
    expect(wrapper.find('li').length).toBe(1);
  });
});