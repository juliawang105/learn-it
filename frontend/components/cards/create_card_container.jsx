import { connect } from "react-redux";
import { createCard } from "../../actions/card_actions";
import CardForm from "./card_form";
import { closeModal, openModal } from "../../actions/modal_actions";
import { fetchDeck } from "../../actions/deck_actions";

const mSTP = state => {
  const deckId = state.ui.modal.data;

  return {
    card: {
      question: "",
      answer: "",
      deck_id: deckId
    },

    formType: "Create Card"
  };
};

const mDTP = dispatch => ({
  action: card => dispatch(createCard(card)),
  closeModal: () => dispatch(closeModal()),
  openModal: (modal, data) => dispatch(openModal(modal, data)),
  fetchDeck: deckId => dispatch(fetchDeck(deckId))
});

export default connect(mSTP, mDTP)(CardForm);
