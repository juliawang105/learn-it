import * as DeckTagUtil from '../util/deck_tag_util';


export const RECEIVE_ALL_DECK_TAGS = " RECEIVE_ALL_DECK_TAGS";
export const RECEIVE_DECK_TAG = "RECEIVE_DECK_TAG";
export const REMOVE_DECK_TAG = "REMOVE_DECK_TAG"

const receiveAllDeckTags = deckTags => ({
    type: RECEIVE_ALL_DECK_TAGS,
    deckTags
});

const receiveDeckTag = deckTag => ({
    type: RECEIVE_DECK_TAG,
    deckTag
});

const removeDeckTag = deckTagId => ({
    type: REMOVE_DECK_TAG,
    deckTagId
})

export const fetchDeckTags = () => dispatch => (
    DeckTagUtil.fetchDeckTags()
        .then(res => dispatch(receiveAllDeckTags(res)))
);

export const createDeckTag = deckTag => dispatch => (
    DeckTagUtil.createDeckTag(deckTag)
        .then( res => dispatch(receiveDeckTag(res)))
);

export const deleteDeckTag = deckTagId => dispatch => (
    DeckTagUtil.deleteDeckTag(deckTagId)
        .then( () => dispatch(removeDeckTag(deckTagId)))
);