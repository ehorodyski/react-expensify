import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, addExpenseSuccess, editExpense, removeExpense } from './actions';
import expenses from '../../__mocks__/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({ type: 'REMOVE_EXPENSE', id: '123abc' });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' });
  expect(action).toEqual({ type: 'EDIT_EXPENSE', id: '123abc', updates: { note: 'New note value' } });
});

test('should setup add expense success action object with provided values', () => {
  const action = addExpenseSuccess(expenses[2]);
  expect(action).toEqual({ type: 'ADD_EXPENSE_SUCCESS', expense: expenses[2] });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expense = { description: 'Mouse', amount: 3000, note: '', createdAt: 1000 };

  store.dispatch(addExpense(expense)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: 'ADD_EXPENSE_SUCCESS', expense: { id: expect.any(String), ...expense } });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then(snapshot => {
    expect(snapshot.val()).toEqual(expense);
    done();
  });
});