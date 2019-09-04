import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header logout={() => { }} />);
  expect(wrapper).toMatchSnapshot();
});

test('should call logout on button click', () => {
  const logout = jest.fn();
  const wrapper = shallow(<Header logout={logout} />);
  wrapper.find('button').simulate('click');
  expect(logout).toHaveBeenCalled();
});