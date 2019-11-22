import { connect } from 'react-redux';
import StudyCard from './study_cards';
import { fetchDeck, } from '../../actions/deck_actions';
import { fetchCard} from '../../actions/card_actions';
import { selectDeckCards } from '../../reducers/selectors';

// const mSTP = (state, ownProps)=> {
//     let test = selectDeckCards(state.entities.cards, ownProps.match.params.deckId);
//     //debugger
//     return {
//         deck: state.entities.decks[ownProps.match.params.deckId],
//         user: state.session.id,
//         cards: test,
//         saves: state.entities.saves
//     };
    
// };

const mDTP = dispatch => ({
    fetchDeck: deckId => dispatch(fetchDeck(deckId)),
    
    fetchCard: cardId => dispatch(fetchCard(cardId)),  
});

export default connect(null, mDTP)(StudyCard)