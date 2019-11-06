import React from 'react';
import { Link } from 'react-router-dom';
import signup_form_container from './signup_form_container';


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
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
        this.props.signup(user);
    }

    update(input) {
        return (e) => {
            this.setState({ [input]: e.target.value })
        };

    };

    render() {
        let title = this.props.formType;
        return (
            <div className="study">
                <div className="slogan">
                    <div>Work Smart  Learn Well</div>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <div className="errors">
                        <span>{this.renderErrors()}</span>
                    </div>
                    
                    <div className='form'>
                        <label>EMAIL: 
                            <input onChange={this.update('email')} type="text" value={this.state.email} />
                        </label>
                    </div>


                    <div className='form'>
                        <label>PASSWORD: 
                            <input onChange={this.update('password')} type="password" value={this.state.password} />
                        </label>
                    </div>

                    <button className="button">{title.toUpperCase()}</button>
                  
                </form>
            </div>
        )
    }
}

export default SignupForm;