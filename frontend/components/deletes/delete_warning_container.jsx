import { connect } from 'react-redux';
import DeleteWarning from './delete_warning';

const mSTP = (state, ownProps) => {
    deck: state.entities.decks 
};

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    deleteDeck: deckId => dispatch(deleteDeck(deckId))
});

export default connect(mSTP, mDTP)(DeleteWarning)