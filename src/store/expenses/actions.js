import database from '../../firebase/firebase';

export const addExpense = (expenseData = {}) => {
  return (dispatch) => {
    const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData;
    const expense = { description, note, amount, createdAt };
    return database.ref('expenses').push(expense)
      .then((ref) => dispatch(addExpenseSuccess({ id: ref.key, ...expense })));
  };
};
export const addExpenseSuccess = (expense) => ({ type: 'ADD_EXPENSE_SUCCESS', expense });
export const editExpense = (id, updates) => ({ type: 'EDIT_EXPENSE', id, updates });
export const removeExpense = ({ id } = {}) => ({ type: 'REMOVE_EXPENSE', id });
export const setExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];
      snapshot.forEach((item) => expenses.push({ id: item.key, ...item.val() }));
      dispatch(setExpensesSuccess(expenses));
    });
  };
};
export const setExpensesSuccess = (expenses) => ({ type: 'SET_EXPENSES_SUCCESS', expenses });
