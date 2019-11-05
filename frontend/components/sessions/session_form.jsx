import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(input) {
        return (e) => {
            this.setState({ [input]: e.target.value })
        };

    };

    render() {
        let title = "";
        if (this.props.formType === 'signup') title = "signup";
        if (this.props.formType === 'login') title = "login";
        return (
            <div className="study">
                <form onSubmit={this.handleSubmit}>

                    {/* <header>Please
                        <Link to="/">{title}</Link>
                    </header> */}

                    <br />
                    <div>
                        <label>Email
                            <input onChange={this.update('email')} type="text" value={this.state.email} />
                        </label>
                    </div>


                    <div>
                        <label>Password
                            <input onChange={this.update('password')} type="password" value={this.state.password} />
                        </label>
                    </div>

                    <button>{title}</button>
                </form>
            </div>
        )
    }
}

export default SessionForm