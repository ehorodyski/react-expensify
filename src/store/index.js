import { createStore, combineReducers, applyMiddleware } from 'redux';
import expensesReducer from './expenses/reducer';
import filtersReducer from './filters/reducer';
import thunk from 'redux-thunk';

export default () => {
  return createStore(
    combineReducers({ expenses: expensesReducer, filters: filtersReducer }),
    applyMiddleware(thunk)
  );
};