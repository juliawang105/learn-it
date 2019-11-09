import { combineReducers } from 'redux';
import { usersReducer } from './users_reducer';
import { decksReducer } from './decks_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    decks: decksReducer,
});

export default entitiesReducer;