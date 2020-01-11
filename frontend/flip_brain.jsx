import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import { logout } from "./actions/session_actions"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
 

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: window.currentUser.users,
        saves: window.currentUser.saves
        // scores: window.currentUser.scores
      },
      session: { id: Object.keys(window.currentUser.users)[0] }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // window.addEventListener("unload", () => {
  //   logout()
  // })
  ReactDOM.render(<Root store={store} />, root);
});
