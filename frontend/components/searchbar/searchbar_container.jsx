import { connect } from 'react-redux';
import { search } from '../../actions/search_actions';
import { fetchDeck } from '../../actions/deck_actions';
import SearchBar from './searchbar';

const mDTP = dispatch => ({
    search: (query) => dispatch(search(query)),
    fetchDeck: deckId => dispatch(fetchDeck(deckId))
});

export default connect(null, mDTP)(SearchBar);