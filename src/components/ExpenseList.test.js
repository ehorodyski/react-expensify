import React from 'react';
import shallow from '../__mocks__/shallow';
import { ExpenseList } from './ExpenseList';
import expenses from '../__mocks__/expenses';

test('should render ExpenseList', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with an empty message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});