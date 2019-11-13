import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.escFunction = this.escFunction.bind(this)
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
        document.addEventListener('keydown', this.escFunction)
    };

    componentWillUnmount(){
        document.removeEventListener("keydown", this.escFunction);
    }

    escFunction(e){
        // e.preventDefault();
        if(e.keyCode === 27){
            this.props.closeModal()
        };
    };

    handleDemo(e) {
        this.setState({ email: 'demo@gmail.com', password: 'password', first_name: 'demo', last_name: 'demo' })
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user).then(() => this.props.history.push('/decks')).then(this.props.closeModal)
         
    };

    update(input) {
        return (e) => {
            this.setState({ [input]: e.target.value })
        };

    };

    render() {
        let title = this.props.formType;
        return (
            <div className="loginformmaster">
                <div onClick={this.props.closeModal} className="close-x-login">×</div>
                    <div tabIndex="0" onKeyDown={this.escFunction}></div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="masterform">
                        
                            <div className='form'>
                                <div className="loginform">Login</div>
                                <br />
                                <div className="inputbox">
                                    <input onChange={this.update('email')}
                                        type="text"
                                        value={this.state.email} 
                                        placeholder='you@email.com'/>
                                </div>
                                <br/>

                                <div className="inputbox">
                                    <input onChange={this.update('password')}
                                            type="password"
                                            value={this.state.password} 
                                            placeholder='password'/>
                                </div>
                            </div>
                        
                            </div>
                                <div className="masterbutton">
                                    <button onClick={this.handleSubmit} className="button">{title.toUpperCase()}</button>
                                    <br/>
                                    <button onClick={this.handleDemo} className="button">DEMO USER</button>
                                </div>

                                <div className="errors">
                                    <div>{this.renderErrors()}</div>
                        </div>

                    </form>
            </div>
        )
    }
}

export default withRouter(LoginForm);