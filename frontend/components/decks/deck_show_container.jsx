import { connect } from 'react-redux';
import { fetchDeck } from '../../actions/deck_actions'
import DeckShow from './deck_show';


const mSTP = (state, ownProps) => ({
    deck: state.entities.decks[ownProps.match.params.deckId]
});

const mDTP = dispatch => ({
    fetchDeck: deckId => dispatch(fetchDeck(deckId))
});

export default connect(mSTP, mDTP)(DeckShow);
