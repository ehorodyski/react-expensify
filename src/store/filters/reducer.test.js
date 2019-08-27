import moment from 'moment';
import reducer from './reducer';

const initialState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

test('should setup default filter values', () => {
  const state = reducer(undefined, { type: '@@INIT' });
  expect(state).toEqual(initialState);
});

test('should set text filter', () => {
  const state = reducer(undefined, { type: 'SET_TEXT_FILTER', text: 'rent' });
  expect(state.text).toBe('rent');
});

test('should set sortBy to amount', () => {
  const state = reducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const state = reducer(undefined, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date');
});

test('should set startDate filter', () => {
  const date = moment();
  const state = reducer(undefined, { type: 'SET_START_DATE', startDate: date });
  expect(state.startDate).toEqual(date);
});

test('should set endDate filter', () => {
  const date = moment();
  const state = reducer(undefined, { type: 'SET_END_DATE', endDate: date });
  expect(state.endDate).toEqual(date);
});