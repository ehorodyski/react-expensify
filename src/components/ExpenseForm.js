import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


export default class ExpenseForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100) : 0,
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: undefined
    };
  }

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
      this.setState({ amount });
  };

  onDateChange = (createdAt) => {
    createdAt && this.setState({ createdAt });
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount)
      return this.setState({ error: 'Please provide description and amount.' });
    this.setState({ error: undefined });

    this.props.onSubmit({
      description: this.state.description,
      amount: parseFloat(this.state.amount, 10) * 100,
      createdAt: this.state.createdAt.valueOf(),
      note: this.state.note
    });

  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={(e) => this.onFormSubmit(e)}>
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
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={(createdAt) => this.onDateChange(createdAt)}
            focused={this.state.calendarFocused}
            onFocusChange={({ focused }) => this.setState({ calendarFocused: focused })}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            value={this.state.note}
            onChange={(e) => this.setState({ note: e.target.value })}
            placeholder="Add a note for your expense (optional)" />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }

};