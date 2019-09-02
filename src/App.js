import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './App.scss';

import './firebase/firebase';


import configureStore from './store';
import { addExpense } from './store/expenses/actions';
import { sortByAmount } from './store/filters/actions';

const store = configureStore();
store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000 }));
store.dispatch(sortByAmount());


function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
