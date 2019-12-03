import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, logout, signup } from './actions/session_actions';
import { fetchDeck, fetchDecks, createDeck, updateDeck, deleteDeck } from './actions/deck_actions';
import { saveDeck, unsaveDeck } from './actions/save_actions';
import { createCard, updateCard, deleteCard } from './actions/card_actions';
import { saveScore, fetchScore, updateScore } from './actions/score_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users:  window.currentUser.users,
                saves:  window.currentUser.saves,
                scores: window.currentUser.scores
            },
            session: { id: Object.keys(window.currentUser.users)[0]}
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.store = store; 
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
    window.createCard = createCard;
    window.updateCard = updateCard;
    window.deleteCard = deleteCard; 
    window.fetchScore = fetchScore;
    window.updateScore = updateScore;
    window.saveScore = saveScore;
    ReactDOM.render(< Root store={store} />, root)
});