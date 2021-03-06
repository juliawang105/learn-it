import React from "react";
import { closeModal } from "../actions/modal_actions";
import { connect } from "react-redux";
import LoginFormContainer from "./sessions/login_form_container";
import SignupFormContainer from "./sessions/signup_form_container";
import CreateDeckContainer from "./decks/create_deck_container";
import CreateCardContainer from "./cards/create_card_container";
import UpdateCardContainer from "./cards/update_card";
import EditDeckContainer from "./decks/edit_deck";
import DeleteDeckContainer from "./deletes/delete_deck_container";
import DeleteCardContainer from "./deletes/delete_card_container";
import { deleteDeck } from '../actions/deck_actions'

class ModalForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.modal) {
      return null;
    }
    let component;
    // debugger
    switch (this.props.modal.modal) {
      case "login":
        component = <LoginFormContainer />;
        break;
      case "signup":
        component = <SignupFormContainer />;
        break;
      case "deck":
        component = <CreateDeckContainer />;
        break;
      case "card":
        component = <CreateCardContainer />;
        break;
      case "edit-card":
        component = <UpdateCardContainer />;
        break;
      case "edit-deck":
        component = <EditDeckContainer />;
        break;
      case "delete-deck":
        debugger
        component = <DeleteDeckContainer />;
        break;
      case "delete-card":
        component = <DeleteCardContainer />;
        break;

      default:
        return null;
    }
    return (
      <div className="modal-background" onClick={this.props.closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  deleteDeck: (deckId) => dispatch(deleteDeck(deckId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
