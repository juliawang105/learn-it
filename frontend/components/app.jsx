import React from "react";
import GreetingContainer from './greetings/greeting_container'
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import SignUpFormContainer from './sessions/signup_form_container';
import LoginFormContainer from './sessions/login_form_container';
import HomeFormContainer from './home_container'

import { AuthRoute } from '../util/route_util'

const App = () => (
    <div className='boss'>
        <div className="home">
            <header className="navbar">
                <div className="name"> 
                    <i className="fa fa-lightbulb-o fa-4x">
                    </i>
                    <span className="name2"> <NavLink className="nav2" to={"/"}>Learn It</NavLink>
                    </span>
                </div>
                <GreetingContainer />
            </header>

            <div className="body">
                {/* switch statements */}
            </div>
            
            <Switch>
                
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignUpFormContainer} />
                <Route exact path='/' component={HomeFormContainer} />
            </Switch>
               
        </div>
    </div>
    
);

export default App;