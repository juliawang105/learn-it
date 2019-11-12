import React from 'react';
import { withRouter } from 'react-router-dom'


class DeckForm extends React.Component{
    constructor(props){
        super(props);

        this.state = this.props.deck; 
        this.handleSubmit= this.handleSubmit.bind(this);
    };

    update(field){
        return(e) => {
            this.setState({[field]: e.target.value})
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then(this.props.closeModal)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="deck_create">
                    <div onClick={this.props.closeModal} className="deck-x">×</div>
                    <div tabIndex="0" onKeyDown={this.escFunction}></div>
                    <div className="deck_form">
                    <h2>{this.props.formType}</h2>
                    <input onChange={this.update('name')} type="text" value={this.state.name}
                    placeholder="Deck Name"/>
                    <button>Create Deck!</button>
                    </div>
                </div>
            </form>
        )
    }
};
export default withRouter(DeckForm);