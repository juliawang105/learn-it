import { combineReducers } from 'redux';
import { usersReducer } from './users_reducer';
import { decksReducer } from './decks_reducer';
import { savesReducer } from './saves_reducer';
import { cardsReducer } from './cards_reducer';
import { scoresReducer } from "./scores_reducer";
import { tagsReducer } from './tags_reducer';
import { deckTagsReducer } from './deck_tags_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    decks: decksReducer,
    saves: savesReducer,
    cards: cardsReducer,
    scores: scoresReducer,
    tags: tagsReducer,
    deckTags: deckTagsReducer
});

export default entitiesReducer;