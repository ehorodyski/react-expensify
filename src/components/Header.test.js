import React from 'react';
import shallow from '../__mocks__/shallow';
import Header from './Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});