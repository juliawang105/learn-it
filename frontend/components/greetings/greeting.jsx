import GreetingContainer from './greeting_container';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import SearchBarContainer from '../searchbar/searchbar_container';

class Greeting extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        this.props.logout();
        this.props.history.push('/')
    }

    // handleClick(field){
    //     this.props.openModal([field]);
    //     // this.props.history.push('/decks')
    // }

    render() {
        let logged = this.props.currentUser
        const display = logged ? (
                <div className="greetings">
                    <SearchBarContainer />
                    <NavLink id="view-deck" to={"/decks"}>View All Decks</NavLink>
                    <div onClick={() => this.props.openModal('deck')} className="create-deck">Create New Deck</div>
                    <div >
                    <NavLink className="user-page" to={`/users/${logged.id}`}><h2>Welcome {logged.first_name} <p>Click to See Your Decks</p></h2></NavLink>
                    </div>
                    <div><button id='logoutbutton' onClick={this.handleSubmit}>LOG OUT</button></div>  
                </div>
                ) : (
                <div className="greetings">
                    <div className="signup">
                        <p onClick={() => this.props.openModal('signup')} className="nav">Sign Up</p>
                    </div>
                    <br/>
                    <div className="login">
                        <p onClick={() => this.props.openModal('login')} className="nav">Log In</p>
                    </div>
                </div>
            );
        

        return (
            <div className="cheese">
                {display}
            </div>
        )
    };
};

export default withRouter(Greeting);