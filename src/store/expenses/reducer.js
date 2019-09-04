const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE_SUCCESS':
      return [...state, action.expense];
    case 'EDIT_EXPENSE_SUCCESS':
      return state.map((expense) => {
        if (expense.id === action.id)
          return { ...expense, ...action.updates };
        return expense;
      });
    case 'REMOVE_EXPENSE_SUCCESS':
      return state.filter(({ id }) => id !== action.id);
    case 'SET_EXPENSES_SUCCESS':
      return action.expenses;
    default:
      return state;
  }
};