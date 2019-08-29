import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import { addExpense } from '../store/expenses/actions';

export class AddExpensePage extends Component {
  addExpense = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.addExpense} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ addExpense: (expense) => dispatch(addExpense(expense)) });
export default connect(undefined, mapDispatchToProps)(AddExpensePage);