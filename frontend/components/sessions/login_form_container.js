import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form'

const mSTP = state => ({
    errors: state.errors.session,
    formType: 'login'
});

const mDTP = dispatch => ({
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(LoginForm);


