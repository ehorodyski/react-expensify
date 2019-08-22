import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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

const NotFoundPage = () => (
  <div>
    404 Not found.
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
