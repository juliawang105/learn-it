import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions'
import DeleteCard from './delete_card'
import { deleteCard } from '../../actions/card_actions'

const mSTP = (state) => {
    // console.log(state.ui.modal.data)
    return {
        data: state.ui.modal.data,
        cards: state.entities.cards
    }

}


const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    //deleteDeck: deckId => dispatch(deleteDeck(deckId)),
    deleteCard: cardId => dispatch(deleteCard(cardId))
});

export default connect(mSTP, mDTP)(DeleteCard)