import { connect } from 'react-redux';
import { fetchDeck, fetchDecks } from '../../actions/deck_actions';
import SearchResults from './search_results';
import { openModal, closeModal } from '../../actions/modal_actions'

const mSTP = state => ({
    decks: state.entities.decks,
    session: state.session.id
});

const mDTP = dispatch => ({
    fetchDeck: deckId => dispatch(fetchDeck(deckId)),
    openModal: (modal, data) => dispatch(openModal(modal, data)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(SearchResults);