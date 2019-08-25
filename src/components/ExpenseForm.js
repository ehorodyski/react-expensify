import React, { Component } from 'react';

export default class ExpenseForm extends Component {

  state = {
    description: '',
    amount: 0,
    note: ''
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/))
      this.setState({ amount });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Description"
          value={this.state.description}
          onChange={(e) => this.setState({ description: e.target.value })}
          autoFocus />
        <input
          type="number"
          value={this.state.amount}
          onChange={(e) => this.onAmountChange(e)}
          placeholder="Amount" />
        <textarea
          value={this.state.note}
          onChange={(e) => this.setState({ note: e.target.value })}
          placeholder="Add a note for your expense (optional)" />
        <button>Add Expense</button>
      </form>
    );
  }

};