import React from "react";
import GreetingContainer from './greetings/greeting_container'
import { Route } from 'react-router-dom';
import SignUpFormContainer from './sessions/signup_form_container';
import LoginFormContainer from './sessions/login_form_container';
import { AuthRoute } from '../util/route_util'

const App = () => (
    <div className="home">
        <header className="navbar">
            <h2> <i className="fa fa-lightbulb-o"></i>Learn.It</h2>
            <GreetingContainer />
        </header>

        {/* <div className="study">
            <div></div>
        </div> */}

        <div className="body">
            {/* switch statements */}
        </div>

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
    </div>
    
);

export default App;