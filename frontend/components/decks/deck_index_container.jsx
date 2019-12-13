import { connect } from 'react-redux';
import { fetchDecks, deleteDeck } from '../../actions/deck_actions';
import { saveDeck, unsaveDeck } from '../../actions/save_actions';
import DeckIndex from './deck_index';
import { closeModal, openModal } from '../../actions/modal_actions';

const mSTP = state => {
    // debugger
    return {
        decks: Object.values(state.entities.decks),
        session: state.session.id,
        saves: Object.values(state.entities.saves)
    }
    
};

const mDTP = dispatch => ({
    fetchDecks: () => dispatch(fetchDecks()),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal, data) => dispatch(openModal(modal, data)),
    deleteDeck: deckId => dispatch(deleteDeck(deckId))
});

export default connect(mSTP, mDTP)(DeckIndex)