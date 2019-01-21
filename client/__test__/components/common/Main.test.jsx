import React from 'react';
import { shallow } from 'enzyme';
import Main from '../../../src/components/common/Main';

let props;

const setup = () => {
  props = {
    children: {}
  }
  return shallow(<Main {...props} />);
}

describe('Main component', () => {
  const wrapper = setup();
  it('should render component', () => {
    expect(wrapper.find('div').length).toBe(3);
  });
});
