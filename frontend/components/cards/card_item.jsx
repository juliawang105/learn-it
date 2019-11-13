import React from 'react';
import UpdateCardContainer from '../cards/update_card'


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
        let button

        if(this.props.deck.creator_id === parseInt(this.props.user)){
            button = <button className='card-delete' onClick={() => this.handleClick()}>Delete Card</button> }
            return(
                <div className="cards">
                    {button}
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