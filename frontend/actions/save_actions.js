import * as DECKSAVEAPIUTIL from '../util/deck_save_util';

export const FOLLOW_DECK = 'FOLLOW_DECK';
export const UNFOLLOW_DECK = 'UNFOLLOW_DECK';

const followDeck = save => ({
    type: FOLLOW_DECK,
    save
});

const unfollowDeck = saveId => ({
    type: UNFOLLOW_DECK,
    saveId
});

export const saveDeck = save => dispatch => (
    DECKSAVEAPIUTIL.saveDeck(save)
        .then(res => dispatch(followDeck(res)))
);

export const unsaveDeck = saveId => (
    DECKSAVEAPIUTIL.unsaveDeck(saveId)
        .then(() => dispatch(unfollowDeck(saveId)))
);