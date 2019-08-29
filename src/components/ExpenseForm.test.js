import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseForm from './ExpenseForm';
import expenses from '../__mocks__/expenses';

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(toJSON(wrapper)).toMatchSnapshot();
  wrapper.find('form').simulate('submit', { preventDefault: () => { } });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'New description';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', { target: { value } });
  expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
  const value = 'New note value';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', { target: { value } });
  expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () => {
  const value = "23.50";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', { target: { value } });
  expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if not valid input', () => {
  const value = "23.5a0";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', { target: { value } });
  expect(wrapper.state('amount')).toBe(0);
});

test('should call onSubmit prop for valid form submission', () => {
  const spy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={spy} />);
  const expense = {
    description: expenses[0].description,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt,
    note: expenses[0].note
  };
  wrapper.find('form').simulate('submit', { preventDefault: () => { } });
  expect(wrapper.state('error')).toBe(undefined);
  expect(spy).toHaveBeenLastCalledWith(expense);
});

test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toBe(focused);
});