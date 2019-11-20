import React from "react";
import GreetingContainer from './greetings/greeting_container'
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import SignUpFormContainer from './sessions/signup_form_container';
import LoginFormContainer from './sessions/login_form_container';
import HomeFormContainer from './home_container'
import ModalContainer from './modal'
import DeckIndexContainer from './decks/deck_index_container';
import DeckShowContainer from './decks/deck_show_container'
import { AuthRoute } from '../util/route_util'
import CreateDeckContainer from './decks/create_deck_container';
import UsersShowContainer from './users/users_show_container';
import StudyCardsContainer from './study/study_cards_container';


const App = () => (
    <div className='boss'>
        <div className="home">
            <ModalContainer />
            <header className="navbar">
                <div className="name"> 
                    <i className="fa fa-lightbulb-o fa-3x">
                    </i>
                    <span className="name2"> <NavLink className="nav2" to={"/"}>Learn It</NavLink>
                    </span>
                    <a className='job' href="https://github.com/juliawang105/fullstack"><i className="fab fa-github fa-2x"></i></a>
                    <a className='job' href="https://www.linkedin.com/in/julia-wang-b1981231/"><i className="fab fa-linkedin fa-2x"></i></a>
                        
                    

                </div>
                <GreetingContainer />
            </header>

            <div className="body">
                {/* switch statements */}
            </div>
            
            <Switch>
                
                {/* <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignUpFormContainer} /> */}
                <Route exact path='/decks' component={DeckIndexContainer} />
                <Route exact path="/decks/:deckId" component={DeckShowContainer} />
                <Route exact path ="/decks/:deckId/study" component={StudyCardsContainer} />
                <Route exact path="/users/:id" component={UsersShowContainer} />
                <Route exact path="/new" component={CreateDeckContainer } />
                <Route exact path='/' component={HomeFormContainer} />
            </Switch>
               
        </div>
    </div>
    
);

export default App;