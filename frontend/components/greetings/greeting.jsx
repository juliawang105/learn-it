import GreetingContainer from './greeting_container';
import React from 'react';
import { NavLink } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        this.props.logout();
    }

    render() {
        let logged = this.props.currentUser
        const display = logged ? (
                <div className="greetings">
                    <h2>Welcome {logged.email}</h2>
                    <button className="button" onClick={this.handleSubmit}>LOG OUT</button>
                </div>
            ) : (
                <div className="greetings">
                    <div className="signup">
                        <NavLink className="nav" to="/signup">Sign Up</NavLink>
                    </div>
                    <br/>
                    <div className="login">
                        <NavLink className="nav" to="/login">Log In</NavLink> 
                    </div>
                </div>
            )
        

        return (
            <div className="cheese">
                {display}
            </div>
        )
    }
}

export default Greeting;