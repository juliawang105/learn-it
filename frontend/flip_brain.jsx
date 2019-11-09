import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, logout, signup } from './actions/session_actions';
import { fetchDeck, fetchDecks, createDeck, updateDeck, deleteDeck } from './actions/deck_actions';
import { saveDeck, unsaveDeck } from './actions/save_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    // window.store = store; 
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    window.fetchDeck = fetchDeck;
    window.fetchDecks = fetchDecks;
    window.createDeck = createDeck;
    window.updateDeck = updateDeck;
    window.deleteDeck = deleteDeck;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.unsaveDeck = unsaveDeck;
    window.saveDeck = saveDeck;
    ReactDOM.render(< Root store={store} />, root)
});