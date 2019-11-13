import { connect } from 'react-redux';
import { fetchDeck,  } from '../../actions/deck_actions';
import {saveDeck, unsaveDeck, fetchSave } from '../../actions/save_actions'
import DeckShow from './deck_show';
import { fetchCard } from '../../actions/card_actions';
import { selectDeckCards } from '../../reducers/selectors';
import { closeModal, openModal } from '../../actions/modal_actions';


const mSTP = (state, ownProps) => {
    // debugger
    // let deck = state.entities.decks[ownProps.match.params.deckId];

    // if (!deck){
    //     return null;
    // };
    let test = selectDeckCards(state.entities.cards, ownProps.match.params.deckId);
    return {
        deck: state.entities.decks[ownProps.match.params.deckId],
        user: state.session.id,
        cards: test,
        saves: state.entities.saves
    }
    
};

const mDTP = dispatch => ({
    fetchDeck: deckId => dispatch(fetchDeck(deckId)),
    saveDeck: save => dispatch(saveDeck(save)),
    unsaveDeck: saveId => dispatch(unsaveDeck(saveId)),
    fetchCard: cardId => dispatch(fetchCard(cardId)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal, data) => dispatch(openModal(modal, data))
});

export default connect(mSTP, mDTP)(DeckShow);
