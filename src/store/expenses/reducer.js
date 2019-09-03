const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE_SUCCESS':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id)
          return { ...expense, ...action.updates };
        return expense;
      });
    default:
      return state;
  }
};