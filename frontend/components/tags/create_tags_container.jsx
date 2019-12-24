import { connect } from "react-redux";
import TagForm from "./create_tag_form";
import { fetchTags, createTag } from "../../actions/tag_actions";
import { createDeckTag } from "../../actions/deck_tag_actions";
import { fetchDeckTags } from "../../actions/deck_tag_actions";
import { selectDeckTags } from "../../reducers/selectors";

const mSTP = (state, ownProps) => {
  // debugger
  //let deckTags = selectDeckTags(state.entities.deckTags, ownProps.deck.id);

  return {
    deck: state.entities.decks,
    tags: state.entities.tags,
    //deckTags: selectDeckTags(state.entities.deckTags, ownProps.deck.id)
    deckTags: state.entities.deckTags
  };
};

const mDTP = dispatch => {
  // debugger
  return {
    createTag: tag => dispatch(createTag(tag)),
    createDeckTag: deckTag => dispatch(createDeckTag(deckTag)),
    fetchDeckTags: deck_id => dispatch(fetchDeckTags(deck_id)),
    fetchTags: () => dispatch(fetchTags())
  };
};

export default connect(mSTP, mDTP)(TagForm);
