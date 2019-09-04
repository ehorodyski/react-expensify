import React from 'react';
import { connect } from 'react-redux';
import { login } from '../store/auth/actions';

export const LoginPage = ({ login }) => (
  <div>
    <button onClick={login}>Login</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({ login: () => dispatch(login()) });
export default connect(undefined, mapDispatchToProps)(LoginPage);