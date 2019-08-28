import moment from 'moment';
import reducer from './reducer';

const expenses = [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: 0
}, {
  id: '2',
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit Card',
  note: '',
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf()
}];

test('should set default state', () => {
  const state = reducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const state = reducer(expenses, { type: 'REMOVE_EXPENSE', id: expenses[1].id });
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const state = reducer(expenses, { type: 'REMOVE_EXPENSE', id: '-1' });
  expect(state).toEqual(expenses);
});

test('should edit an expense', () => {
  const amount = 122000;
  const state = reducer(expenses, { type: 'EDIT_EXPENSE', id: expenses[1].id, updates: { amount } });
  console.log(state);
  expect(state[1].amount).toBe(amount);
});

test('should not edit an expense if id is not found', () => {
  const amount = 122000;
  const state = reducer(expenses, { type: 'EDIT_EXPENSE', id: -1, updates: { amount } });
  console.log(state);
  expect(state).toEqual(expenses);
});