import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, addExpenseSuccess, editExpense, editExpenseSuccess, removeExpense, removeExpenseSuccess, setExpenses, setExpensesSuccess } from './actions';
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

test('should setup remove expense success action object', () => {
  const action = removeExpenseSuccess({ id: '123abc' });
  expect(action).toEqual({ type: 'REMOVE_EXPENSE_SUCCESS', id: '123abc' });
});

test('should remove expense from firebase', (done) => {
  const store = createMockStore({});
  const id = expenses[2].id;
  store.dispatch(removeExpense({ id })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: 'REMOVE_EXPENSE_SUCCESS', id });
    return database.ref(`expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  });
});

test('should setup edit expense success action object', () => {
  const action = editExpenseSuccess('123abc', { note: 'New note value' });
  expect(action).toEqual({ type: 'EDIT_EXPENSE_SUCCESS', id: '123abc', updates: { note: 'New note value' } });
});

test('should edit expense from firebase', (done) => {
  const store = createMockStore({});
  const id = expenses[0].id;
  const updates = { amount: 21045 };
  store.dispatch(editExpense(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: 'EDIT_EXPENSE_SUCCESS', id, updates });
    return database.ref(`expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val().amount).toBe(updates.amount);
    done();
  });
});

test('should setup add expense success action object with provided values', () => {
  const action = addExpenseSuccess(expenses[2]);
  expect(action).toEqual({ type: 'ADD_EXPENSE_SUCCESS', expense: expenses[2] });
});

test('should add expense to firebase and store', (done) => {
  const store = createMockStore({});
  const expense = { description: 'Mouse', amount: 3000, note: '', createdAt: 1000 };
  store.dispatch(addExpense(expense)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: 'ADD_EXPENSE_SUCCESS', expense: { id: expect.any(String), ...expense } });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expense);
    done();
  });
});

test('should setup set expense success action object with data', () => {
  const action = setExpensesSuccess(expenses);
  expect(action).toEqual({ type: 'SET_EXPENSES_SUCCESS', expenses });
});

test('should fetch expenses from firebase', (done) => {
  const store = createMockStore({});
  store.dispatch(setExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: 'SET_EXPENSES_SUCCESS', expenses });
    done();
  });
});