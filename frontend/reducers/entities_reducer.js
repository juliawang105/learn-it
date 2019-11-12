import { combineReducers } from 'redux';
import { usersReducer } from './users_reducer';
import { decksReducer } from './decks_reducer';
import { savesReducer } from './saves_reducer';
import { cardsReducer } from './cards_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    decks: decksReducer,
    saves: savesReducer,
    cards: cardsReducer
});

export default entitiesReducer;