import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as Pages from '../pages';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Pages.ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={Pages.AddExpensePage} />
        <Route path="/edit" component={Pages.EditExpensePage} />
        <Route path="/help" component={Pages.HelpPage} />
        <Route component={Pages.NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;