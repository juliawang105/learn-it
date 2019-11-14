import React from 'react';
import DeckForm from './deck_form';
import { closeModal, openModal } from '../../actions/modal_actions';
import { fetchDecks, updateDeck } from '../../actions/deck_actions';
import { connect } from 'react-redux';

class EditDeckForm extends React.Component {

    componentDidMount() {
        this.props.fetchDecks();
    };

    render() {
        // debugger
        const { action, formType, deck, closeModal } = this.props;


        if (!card) return null;
        return (
            <DeckForm
                action={action}
                formType={formType}
                deck={deck}
                closeModal={closeModal} />
        );
    }
}


const mSTP = (state) => {
    const deck = state.ui.modal.data;

    return {
        deck,
        formType: 'Update Deck'
    }
};

const mDTP = dispatch => ({
    action: deck => dispatch(updateDeck(deck)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal, data) => dispatch(openModal(modal, data)),
    fetchCard: (deckId) => dispatch(fetchCard(deckId)),

});

export default connect(mSTP, mDTP)(EditDeckForm); 
