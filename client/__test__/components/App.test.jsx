import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/App';

const wrapper = shallow(<App />);

describe('App component', () => {
  it('should render app component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
