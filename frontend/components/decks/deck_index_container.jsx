import { connect } from 'react-redux';
import { fetchDecks } from '../../actions/deck_actions';
import { saveDeck, unsaveDeck } from '../../actions/save_actions';
import DeckIndex from './deck_index';

const mSTP = state => ({
    decks: Object.values(state.entities.decks)
});

const mDTP = dispatch => ({
    fetchDecks: () => dispatch(fetchDecks()),
    saveDeck: save => dispatch(saveDeck(save)),
    unsaveDeck: saveId => dispatch(unsaveDeck(saveId))
});

export default connect(mSTP,mDTP)(DeckIndex);