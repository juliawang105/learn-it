import { connect } from 'react-redux';
import { fetchDeck } from '../../actions/deck_actions'
import DeckShow from './deck_show';


const mSTP = (state, ownProps) => ({
    deck: state.entities.decks[ownProps.match.params.deckId],
    user: state.session.id
});

const mDTP = dispatch => ({
    fetchDeck: deckId => dispatch(fetchDeck(deckId)),
    saveDeck: save => dispatch(saveDeck(save)),
    unsaveDeck: saveId => dispatch(unsaveDeck(saveId))
});

export default connect(mSTP, mDTP)(DeckShow);
