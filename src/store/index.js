import { createStore, combineReducers } from 'redux';
import expensesReducer from './expenses/reducer';
import filtersReducer from './filters/reducer';

export default () => {
  return createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );
};