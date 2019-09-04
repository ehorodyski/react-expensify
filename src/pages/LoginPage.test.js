import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { LoginPage } from './LoginPage';

test('should correctly render LoginPage', () => {
  const wrapper = shallow(<LoginPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should call login on button click', () => {
  const login = jest.fn();
  const wrapper = shallow(<LoginPage login={login} />);
  wrapper.find('button').simulate('click');
  expect(login).toHaveBeenCalled();
});