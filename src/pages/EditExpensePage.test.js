import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { EditExpensePage } from './EditExpensePage';
import expenses from '../__mocks__/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[2]}
      editExpense={editExpense}
      history={history}
      removeExpense={removeExpense} />
  );
});

test('should render EditExpensePage correctly', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle removeExpense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
});
