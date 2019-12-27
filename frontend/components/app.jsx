import React from "react";
import GreetingContainer from "./greetings/greeting_container";
import { Route, Switch, Link, NavLink } from "react-router-dom";
import SignUpFormContainer from "./sessions/signup_form_container";
import LoginFormContainer from "./sessions/login_form_container";
import HomeFormContainer from "./home_container";
import ModalContainer from "./modal";
import DeckIndexContainer from "./decks/deck_index_container";
import DeckShowContainer from "./decks/deck_show_container";
import { AuthRoute } from "../util/route_util";
import CreateDeckContainer from "./decks/create_deck_container";
import UsersShowContainer from "./users/users_show_container";
import StudyCardsContainer from "./study/study_cards_container";
import ProgressBarContainer from "./progressbar/progressbar_container";
import SearchResultsContainer from "./searchbar/search_results_container";

const App = () => (
  <div className="boss">
    <div className="home">
      <ModalContainer />
      <header className="navbar">
        <div className="name">
          <i className="fa fa-lightbulb-o fa-2x"></i>
          <NavLink className="nav2" to={"/"}>
            Learn It
          </NavLink>

          <div>
            <a
              className="job"
              target="_blank"
              href="https://github.com/juliawang105/fullstack">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
          <div>
            <a
              className="job"
              target="_blank"
              href="https://www.linkedin.com/in/julia-wang-b1981231/">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
          <div>
            <a
              className="job"
              target="_blank"
              href="https://www.julia-w.com">
              Portfolio
            </a>
          </div>
        </div>
        <GreetingContainer />
      </header>

      {/* <div className="body">
                {/* switch statements */}
      {/* </div> */}

      <Switch>
        {/* <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignUpFormContainer} /> */}
        <Route exact path="/decks" component={DeckIndexContainer} />
        <Route exact path="/decks/:deckId" component={DeckShowContainer} />
        <Route
          exact
          path="/decks/:deckId/study"
          component={StudyCardsContainer}
        />
        <Route exact path="/users/:id" component={UsersShowContainer} />
        <Route exact path="/new" component={CreateDeckContainer} />
        <Route exact path="/searches" component={SearchResultsContainer} />
        {/* <Route exact path="/decks/:deckId/progress" component={ ProgressBarContainer} /> */}

        <Route exact path="/" component={HomeFormContainer} />
      </Switch>
    </div>
  </div>
);

export default App;
