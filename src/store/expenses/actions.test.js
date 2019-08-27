import { addExpense, editExpense, removeExpense } from './actions';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123' });
  expect(action).toEqual({ type: 'REMOVE_EXPENSE', id: '123' });
});

test('should setup edit expense action', () => {
  const action = editExpense('123', { note: 'New note' });
  expect(action).toEqual({ type: 'EDIT_EXPENSE', id: '123', updates: { note: 'New note' } });
});

test('should setup add expense action object with provided values', () => {
  const expense = { description: 'rent', amount: 100, createdAt: 1000, note: 'This is for next month\s rent' };
  const action = addExpense(expense);
  expect(action).toEqual({ type: 'ADD_EXPENSE', expense: { ...expense, id: expect.any(String) } });
});


test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});