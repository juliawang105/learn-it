import React from 'react';
import { Link } from 'react-router-dom';
import signup_form_container from './signup_form_container';



class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            first_name: "",
            last_name: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleDemo = this.handleDemo.bind(this);
    }

    renderErrors() {
        const errors = this.props.errors
        return (
            <ul>
                {errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    };

    componentDidMount() {
        this.props.clearErrors();
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user).then(this.props.closeModal);
    }

    update(input) {
        return (e) => {
            this.setState({ [input]: e.target.value })
        };

    };

    render() {
        let title = this.props.formType;
        return (
            
                <div className="signupformmaster">

                    <form onSubmit={this.handleSubmit}>
                        <div onClick={this.props.closeModal} className="close-x">X</div>
                        
                    <div className="masterform">
                        
                        <br/>
                        <div className='form'>
                            <div className="loginform">Signup</div>
                            <br />
                            <div className="inputbox">
                                <input onChange={this.update('first_name')}
                                    type="text"
                                    value={this.state.first_name}
                                    placeholder='first name'
                                    required />
                            </div>
                            <br />
                            <div className="inputbox">
                                <input onChange={this.update('last_name')}
                                    type="text"
                                    value={this.state.last_name}
                                    placeholder='last name'
                                    required />
                            </div>
                            <br />
                            <div className="inputbox">
                                <input onChange={this.update('email')}
                                    type="text"
                                    value={this.state.email}
                                    placeholder='you@email.com' />
                            </div>
                            <br />
                            <div className="inputbox">
                                <input onChange={this.update('password')}
                                    type="password"
                                    value={this.state.password}
                                    placeholder='password' />
                            </div>
                        </div>
                    </div>
                        <button className="button">{title.toUpperCase()}</button>
                        <div className="errors">
                            <span>{this.renderErrors()}</span>
                        </div>
                    </form>
                </div>
            
        )
    }
}

export default SignupForm;