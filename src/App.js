import React from 'react';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './App.scss';

import configureStore from './store';
import { addExpense } from './store/expenses/actions';
import { setTextFilter } from './store/filters/actions';
import getVisibleExpenses from './store/expenses/selectors';

const store = configureStore();
store.dispatch(addExpense({ description: 'Water Bill' }));
store.dispatch(addExpense({ description: 'Gas Bill' }));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

function App() {
  return (
    <AppRouter />
  );
}

export default App;
