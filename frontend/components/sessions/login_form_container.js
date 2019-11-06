import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
import { openModal, closeModal } from '../../actions/modal_actions'

const mSTP = state => ({
    errors: state.errors.session,
    formType: 'login'
});

const mDTP = dispatch => ({
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    openModal: () => dispatch(openModal('login')),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(LoginForm);


