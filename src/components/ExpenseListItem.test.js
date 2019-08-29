import React from 'react';
import shallow from '../__mocks__/shallow';
import ExpenseListItem from './ExpenseListItem';
import expenses from '../__mocks__/expenses';

test('should render ExpenseListItem', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});