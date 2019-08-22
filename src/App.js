import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './App.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is my dashboard.
  </div>
);

const AddExpensePage = () => (
  <div>
    This is my add expense page.
  </div>
);

const EditExpensePage = () => (
  <div>
    This is my edit expense page.
  </div>
);

const HelpPage = () => (
  <div>
    This is my help expense page.
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
