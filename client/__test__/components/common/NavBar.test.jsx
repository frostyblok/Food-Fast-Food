import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from '../../../src/components/common/NavBar';

let props;

const setup = () => {
  props = {
    isAuthenticated: false,
    logout: jest.fn()
  }
  return shallow(<NavBar {...props} />);
}
describe('Navbar component', () => {
  const wrapper = setup();
  const action = wrapper.instance();
  const logout = jest.fn();
  it('should render component', () => {
    expect(wrapper.find('header').length).toBe(1);
    expect(wrapper.find('div').length).toBe(4);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('Link').length).toBe(3);
  });

  it('should render spinner', () => {
    wrapper.setProps({
      isAuthenticated: true
    });
    expect(wrapper.find('Link').length).toBe(2);
  });

  it('should logout a user', () => {
    const logout = jest.spyOn(action, 'onLogout');
    action.onLogout();
    expect(logout).toBeCalled();
  });
});