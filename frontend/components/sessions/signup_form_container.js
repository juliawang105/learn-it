import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, clearErrors } from '../../actions/session_actions';
import React from 'react';

const mSTP = state => ({
    errors: state.errors.session,
    formType: 'signup'
});

const mDTP = dispatch =>({
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(SignupForm);