import React from 'react';
import shallow from '../__mocks__/shallow';
import { ExpenseDashboardPage } from './ExpenseDashboardPage';

test('should render ExpenseDashboardPage correctly', () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});