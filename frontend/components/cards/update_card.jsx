import React from 'react';
import CardForm from './card_form';
import { closeModal, openModal } from '../../actions/modal_actions';
import { fetchDeck } from '../../actions/deck_actions';
import { fetchCard, updateCard } from '../../actions/card_actions';
import { connect } from 'react-redux'; 

class updateCardForm extends React.Component{

    componentDidMount() {
        this.props.fetchCard(this.props.card.id)
    };

    render(){
        const { action, formType, card } = this.props;

        
            if (!card) return null;
            return (
            <CardForm
                action={action}
                formType={formType}
                card={card} />
        );
    }
}
        

const mSTP = (state) => {
    const deckId = state.ui.modal.data;

    return {
        card: {
            question: "",
            answer: "",
            deck_id: deckId
        },

        formType: 'Update Card'
    }
};

const mDTP = dispatch => ({
    action: card => dispatch(createCard(card)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal, data) => dispatch(openModal(modal, data)),
    fetchCard: (cardId) => dispatch(fetchCard(cardId)),
    updateCard: card => dispatch(updateCard(card))
});

export default connect(mSTP, mDTP)(updateCardForm); 
