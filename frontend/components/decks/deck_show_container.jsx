import { connect } from "react-redux";
import { fetchDeck } from "../../actions/deck_actions";
import { saveDeck, unsaveDeck, fetchSave } from "../../actions/save_actions";
import DeckShow from "./deck_show";
import { fetchCard, deleteCard } from "../../actions/card_actions";
import { selectDeckCards } from "../../reducers/selectors";
import { fetchTag } from "../../actions/tag_actions";
import { closeModal, openModal } from "../../actions/modal_actions";
import { fetchTags } from "../../actions/tag_actions";
import { createDeckTag } from "../../actions/deck_tag_actions";

const mSTP = (state, ownProps) => {
  let deckCards = selectDeckCards(
    state.entities.cards,
    ownProps.match.params.deckId
  );
  //debugger;
  return {
    deck: state.entities.decks[ownProps.match.params.deckId],
    user: state.session.id,
    cards: deckCards,
    saves: state.entities.saves

    // tags: state.entities.tags
  };
};

const mDTP = dispatch => ({
  fetchDeck: deckId => dispatch(fetchDeck(deckId)),
  saveDeck: save => dispatch(saveDeck(save)),
  unsaveDeck: saveId => dispatch(unsaveDeck(saveId)),
  fetchCard: cardId => dispatch(fetchCard(cardId)),
  closeModal: () => dispatch(closeModal()),
  openModal: (modal, data) => dispatch(openModal(modal, data)),
  deleteCard: cardId => dispatch(deleteCard(cardId)),
  fetchTag: tagId => dispatch(fetchTag(tagId)),
  fetchTags: () => dispatch(fetchTags()),
  createDeckTag: deckTag => dispatch(createDeckTag(deckTag))
});

export default connect(mSTP, mDTP)(DeckShow);
