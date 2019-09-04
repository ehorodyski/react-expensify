import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './App.scss';
import { firebase } from './firebase/firebase';
import configureStore from './store';
import { setExpenses } from './store/expenses/actions';

const store = configureStore();
store.dispatch(setExpenses());

firebase.auth().onAuthStateChanged((user) => {
  console.log(user ? 'login' : 'logout');
});

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}
export default App;
