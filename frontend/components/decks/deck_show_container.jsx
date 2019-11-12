import { connect } from 'react-redux';
import { fetchDeck } from '../../actions/deck_actions';
import {saveDeck, unsaveDeck, fetchSave } from '../../actions/save_actions'
import DeckShow from './deck_show';
import { fetchCard } from '../../actions/card_actions'


const mSTP = (state, ownProps) => ({
    deck: state.entities.decks,
    // [ownProps.match.params.deckId],
    user: state.session.id,
    cards: Object.values(state.entities.cards),
    saves: state.entities.saves
});

const mDTP = dispatch => ({
    fetchDeck: deckId => dispatch(fetchDeck(deckId)),
    saveDeck: save => dispatch(saveDeck(save)),
    unsaveDeck: saveId => dispatch(unsaveDeck(saveId)),
    fetchCard: cardId => dispatch(fetchCard(cardId))
});

export default connect(mSTP, mDTP)(DeckShow);
