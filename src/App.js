import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './App.scss';
import './firebase/firebase';
import configureStore from './store';
import { sortByAmount } from './store/filters/actions';

const store = configureStore();
store.dispatch(sortByAmount());

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
