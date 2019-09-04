import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/auth/actions';

export const Header = ({ logout }) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <button onClick={logout}>Logout</button>
  </header>
);
const mapDispatchToProps = (dispatch) => ({ logout: () => dispatch(logout()) });
export default connect(undefined, mapDispatchToProps)(Header);

