import React from 'react';



class CardItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        // debugger
        return(
            <div className="cards">
                <div className="questions"> {this.props.card.question} </div>
                <div className="answers"> {this.props.card.answer} </div>
            </div>
        )
    }
};

export default CardItem;