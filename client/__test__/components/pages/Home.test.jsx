import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../../src/components/pages/Homepage.jsx';

const wrapper = shallow(<HomePage />);

describe('Homepage component', () => {
  it('should render homepage component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
