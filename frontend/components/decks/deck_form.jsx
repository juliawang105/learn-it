import React from 'react';
import { withRouter } from 'react-router-dom'


class DeckForm extends React.Component{
    constructor(props){
        super(props);

        this.state = this.props.deck; 
        this.handleSubmit= this.handleSubmit.bind(this);
        this.escFunction = this.escFunction.bind(this)
    };

    update(field){
        return(e) => {
            this.setState({[field]: e.target.value})
        };
    };

    escFunction(e) {
        // e.preventDefault();
        if (e.keyCode === 27) {
            this.props.closeModal()
        };
    };

    componentDidMount() {
        // this.props.fetchDecks();
        document.addEventListener('keydown', this.escFunction)
    };

    componentWillUnmount() {
        document.removeEventListener("keydown", this.escFunction);
    }

    handleSubmit(e) {
        e.preventDefault();
        //debugger
        this.props.action(this.state)
        .then( res => {
            this.props.history.push(`/decks/${res.payload.id}`)
            // console.log(res)
        })
        .then(this.props.closeModal)
    }

    render(){
        // debugger
        
        let button;
        if (this.props.formType === 'Create Deck') {
            button = <button>Create Deck!</button>
        } else if (this.props.formType === 'Update Card') {
            button = <button>Edit Deck</button>
        }
        
        return (

            
            <form onSubmit={this.handleSubmit}>
                <div className="deck_create">
                    <div onClick={this.props.closeModal} className="deck-x">×</div>
                    <div tabIndex="0" onKeyDown={this.escFunction}></div>
                    <div className="deck_form">
                    <h2>{this.props.formType}</h2>
                    <input onChange={this.update('name')} type="text" value={this.state.name}
                    placeholder="Deck Name"/>
                    {button}
                    </div>
                </div>
            </form>
        )
    }
};
export default withRouter(DeckForm);