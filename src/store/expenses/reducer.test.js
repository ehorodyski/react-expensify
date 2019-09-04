import reducer from './reducer';
import expenses from '../../__mocks__/expenses';

test('should set default state', () => {
  const state = reducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const state = reducer(expenses, { type: 'REMOVE_EXPENSE_SUCCESS', id: expenses[1].id });
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const state = reducer(expenses, { type: 'REMOVE_EXPENSE_SUCCESS', id: '-1' });
  expect(state).toEqual(expenses);
});

test('should edit an expense', () => {
  const amount = 122000;
  const state = reducer(expenses, { type: 'EDIT_EXPENSE_SUCCESS', id: expenses[1].id, updates: { amount } });
  expect(state[1].amount).toBe(amount);
});

test('should not edit an expense if id is not found', () => {
  const amount = 122000;
  const state = reducer(expenses, { type: 'EDIT_EXPENSE_SUCCESS', id: -1, updates: { amount } });
  expect(state).toEqual(expenses);
});

test('should set expsenses', () => {
  const state = reducer(expenses, { type: 'SET_EXPENSES_SUCCESS', expenses });
  expect(state).toEqual(expenses);
});