import React from 'react';
import { shallow } from 'enzyme';
import FlexContainer from '../../../src/components/common/FlexContainer';

const wrapper = shallow(<FlexContainer />);

describe('one order component', () => {
  it('should render component', () => {
    expect(wrapper.find('div').length).toBe(6);
    expect(wrapper.find('h4').length).toBe(5);
  });
});
