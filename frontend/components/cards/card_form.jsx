import React from 'react';
import { withRouter } from 'react-router-dom'

class CardForm extends React.Component{
    constructor(props){
        super(props);

        this.state = this.props.card;
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        debugger
        this.props.action(this.state).then(this.props.closeModal)
    }

    render(){
        // debugger
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="card-create">
                <div onClick={this.props.closeModal} className="deck-x">×</div>
                <div tabIndex="0" onKeyDown={this.escFunction}></div>
                <div className="deck_form">
                    <h2>{this.props.formType}</h2>
                    <input onChange={this.update('question')} type="text" value={this.state.question}
                        placeholder="Question" />
                    <input onChange={this.update('answer')} type="text" value={this.state.answer}
                        placeholder="Answer" />
                    <button>Create Card!</button>
                </div>

                </div>
            </form>
        )
    }
};

export default withRouter(CardForm);