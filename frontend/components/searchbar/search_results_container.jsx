import { connect } from 'react-redux';
import { fetchDeck } from '../../actions/deck_actions';
import SearchResults from './search_results';

const mSTP = state => ({
    decks: state.entities.decks 
});

const mDTP = dispatch => ({
    fetchDeck: deckId => dispatch(fetchDeck(deckId))
});

export default connect(mSTP, mDTP)(SearchResults);