import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions'
import DeleteWarning from './delete_warning';

const mSTP = (state) => {
    console.log(state.ui.modal.data)
    return{
        deck: state.ui.modal.data
    }
    
}


const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    deleteDeck: deckId => dispatch(deleteDeck(deckId))
});

export default connect(mSTP, mDTP)(DeleteWarning)