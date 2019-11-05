import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, logout, signup } from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    window.login = login;
    window.logout = logout;
    window.signup = signup;
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
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(< Root store={store} />, root)
});