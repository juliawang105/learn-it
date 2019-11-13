import React from 'react';
// import { deleteCard } from '../../actions/card_actions'


class CardItem extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        event.preventDefault();
        let cardId = this.props.card.id;
        // debugger
        this.props.deleteCard(cardId)
    }

    render(){
        // debugger
        return(
            <div className="cards">
                <button onClick={()=> this.handleClick()}>Delete Card</button>
                <label>Question
                    <div className="questions"> {this.props.card.question} </div>
                </label>
                
                <label>Answer
                    <div className="answers"> {this.props.card.answer} </div>
                </label>
                
            </div>
        )
    }
};

export default CardItem;