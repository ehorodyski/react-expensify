import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../store/expenses/selectors';
import ExpenseListItem from './ExpenseListItem';

export const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {
      !props.expenses.length ?
        (<p>No expenses</p>) :
        (props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} />))
    }
  </div>
);

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters)
});
export default connect(mapStateToProps)(ExpenseList);