import { connect } from "react-redux";
import { createDeck } from "../../actions/deck_actions";
import DeckForm from "./deck_form";
import { closeModal, openModal } from "../../actions/modal_actions";

const mSTP = state => ({
  deck: {
    name: ""
  },
  formType: "Create Deck"
});

const mDTP = dispatch => ({
  action: deck => dispatch(createDeck(deck)),
  closeModal: () => dispatch(closeModal()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(DeckForm);
