import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as Pages from '../pages';
import AddExpensePage from '../pages/AddExpensePage';
import EditExpensePage from '../pages/EditExpensePage';
import LoginPage from '../pages/LoginPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={Pages.ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={Pages.HelpPage} />
        <Route component={Pages.NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;