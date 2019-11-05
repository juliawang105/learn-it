import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import React from 'react';

const mSTP = state => ({
    errors: state.errors,
    formType: 'signup'
});

const mDTP = dispatch =>({
    processForm: (user) => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(SessionForm);