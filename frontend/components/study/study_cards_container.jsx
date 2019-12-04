import { connect } from 'react-redux';
import StudyCard from './study_cards';
import { fetchDeck, } from '../../actions/deck_actions';
import { fetchCard} from '../../actions/card_actions';
import { selectDeckCards, selectScores } from '../../reducers/selectors';
import {saveScore, updateScore } from '../../actions/score_actions'

const mSTP = (state, ownProps)=> {
    let test = selectDeckCards(state.entities.cards, ownProps.match.params.deckId);
    // let scores = selectScores(state.entities.scores, ownProps.match.params.deckId);
    
    return {
        deck: state.entities.decks[ownProps.match.params.deckId],
        user: state.session.id,
        cards: test,
        saves: state.entities.saves,
        scores: state.entities.scores,
    };
    
};

const mDTP = dispatch => ({
    fetchDeck: deckId => dispatch(fetchDeck(deckId)),
    fetchCard: cardId => dispatch(fetchCard(cardId)), 
    saveScore: score => dispatch(saveScore(score)), 
    updateScore: score => dispatch(updateScore(score)) 
});

export default connect(mSTP, mDTP)(StudyCard)