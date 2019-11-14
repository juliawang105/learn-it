import * as DECKSAVEAPIUTIL from '../util/deck_save_util';

export const FOLLOW_DECK = 'FOLLOW_DECK';
export const UNFOLLOW_DECK = 'UNFOLLOW_DECK';
export const RECEIVE_SAVE = 'RECEIVE_SAVE'

const followDeck = save => ({
    type: FOLLOW_DECK,
    save
});

const unfollowDeck = saveId => ({
    type: UNFOLLOW_DECK,
    saveId
});

const receiveSave = saveId => ({
    type: RECEIVE_SAVE,
    saveId
})

export const saveDeck = save => dispatch => (
    DECKSAVEAPIUTIL.saveDeck(save)
        .then((res) => dispatch(followDeck(res)))
);

export const unsaveDeck = saveId => dispatch => (
    DECKSAVEAPIUTIL.unsaveDeck(saveId)
        .then(() => dispatch(unfollowDeck(saveId)))
);

export const fetchSave = saveId => dispatch => (
    DECKSAVEAPIUTIL.fetchSave(saveId)
        .then( (res) => dispatch(receiveSave(res)))
);