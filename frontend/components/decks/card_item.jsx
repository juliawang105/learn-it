import React from 'react';


class CardItem extends React.Component{
    constructor(props){
        super(props);
    }

    // componentDidMount(){
    //     this.props.fetchCard()
    // }

    render(){
        // debugger
        return(
            <div className="cards">
                <div> {this.props.card.question} </div>
                <div> {this.props.card.answer} </div>
            </div>
        )
    }
};

export default CardItem;