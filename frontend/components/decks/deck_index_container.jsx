import { connect } from 'react-redux';
import { fetchDecks, deleteDeck } from '../../actions/deck_actions';
import { saveDeck, unsaveDeck } from '../../actions/save_actions';
import DeckIndex from './deck_index';
import { closeModal, openModal } from '../../actions/modal_actions';

const mSTP = state => ({
    decks: Object.values(state.entities.decks)
});

const mDTP = dispatch => ({
    fetchDecks: () => dispatch(fetchDecks()),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    deleteDeck: deckId => dispatch(deleteDeck(deckId))
});

export default connect(mSTP, mDTP)(DeckIndex)