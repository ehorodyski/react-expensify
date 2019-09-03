import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, addExpenseSuccess, editExpense, removeExpense, setExpenses, setExpensesSuccess } from './actions';
import expenses from '../../__mocks__/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database.ref('expenses').set(expensesData).then(done);
});

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

test('should setup set expense action object with data', () => {
  const action = setExpensesSuccess(expenses);
  expect(action).toEqual({ type: 'SET_EXPENSES_SUCCESS', expenses });
});

// test('should fetch expenses from the database', (done) => {
//   const store = createMockStore({});
//   store.dispatch(setExpenses()).then(() => {
//     const actions = store.getActions();
//     expect(actions[0]).toEqual({ type: 'SET_EXPENSES_SUCCESS', ...expenses });
//     done();
//   });
// });