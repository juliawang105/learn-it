import React from "react";
import CardForm from "./card_form";
import { closeModal, openModal } from "../../actions/modal_actions";
import { fetchCard, updateCard } from "../../actions/card_actions";
import { connect } from "react-redux";
import { fetchDeck } from "../../actions/deck_actions";
import { updateDeck } from "../../util/deck_util";

class UpdateCardForm extends React.Component {
  componentDidMount() {
    this.props.fetchCard(this.props.card.id);
  }

  render() {
    // debugger
    const {
      action,
      formType,
      card,
      closeModal,
      fetchCard,
      fetchDeck
    } = this.props;

    if (!card) return null;
    return (
      <CardForm
        action={action}
        formType={formType}
        card={card}
        closeModal={closeModal}
        fetchCard={fetchCard}
        fetchDeck={fetchDeck}
      />
    );
  }
}

const mSTP = state => {
  const card = state.ui.modal.data;

  return {
    card,
    formType: "Update Card"
  };
};

const mDTP = dispatch => ({
  action: card => dispatch(updateCard(card)),
  closeModal: () => dispatch(closeModal()),
  openModal: (modal, data) => dispatch(openModal(modal, data)),
  fetchCard: cardId => dispatch(fetchCard(cardId)),
  fetchDeck: deckId => dispatch(fetchDeck(deckId))
});

export default connect(mSTP, mDTP)(UpdateCardForm);
