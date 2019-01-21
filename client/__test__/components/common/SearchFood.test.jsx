import React from 'react';
import { shallow } from 'enzyme';
import SearchFood from '../../../src/components/common/SearchFood';

const wrapper = shallow(<SearchFood />);

describe('Search food component', () => {
  it('should render component', () => {
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('SearchForm').length).toBe(1);
  });
});
