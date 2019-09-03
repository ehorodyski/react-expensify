import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './App.scss';
import './firebase/firebase';
import configureStore from './store';
import { setExpenses } from './store/expenses/actions';

const store = configureStore();
store.dispatch(setExpenses());

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
