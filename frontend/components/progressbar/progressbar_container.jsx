import { connect } from 'react-redux';
import ProgressBar from './progressbar';
import { withRouter } from 'react-router-dom';
import {fetchScores} from '../../actions/score_actions';
import { clearAllCards, fetchCards } from '../../actions/card_actions';
import { fetchDeck } from '../../actions/deck_actions';

const mSTP = (state, ownProps) => {
    // const deckId = ownProps.match.params.deckId;
    // const deck = state.entities.decks[deckId];
    //debugger
    return{
        // cards: Object.values(state.entities.cards),
        deck: state.entities.decks,
        user: state.session.id,
        scores: state.entities.scores,
        cards: Object.keys(state.entities.cards)
    };
};

const mDTP = dispatch => ({
    fetchScores: (deckId, learnerId) => dispatch(fetchScores(deckId, learnerId)),
    clearAllCards: () => dispatch(clearAllCards()),
    fetchDeck: deckId => dispatch(fetchDeck(deckId)),
    fetchCards: deckId => dispatch(fetchCards(deckId))
})

export default connect(mSTP, mDTP)(ProgressBar)