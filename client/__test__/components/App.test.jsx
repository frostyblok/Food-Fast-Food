import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import App from '../../src/App';

const wrapper = shallow(<App />);

describe('App component', () => {
  it('should render app component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
