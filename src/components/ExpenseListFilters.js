import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../store/filters/actions';

const ExpenseListFilters = (props) => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={(e) => props.dispatch(setTextFilter(e.target.value))}
    />
    <select
      value={props.filters.sortBy}
      onChange={(e) => {
        if (e.target.value === 'date')
          return props.dispatch(sortByDate());
        if (e.target.value === 'amount')
          return props.dispatch(sortByAmount());
        return;
      }}>
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);
const mapStateToProps = (state) => ({ filters: state.filters });
export default connect(mapStateToProps)(ExpenseListFilters);