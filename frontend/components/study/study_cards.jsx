import React from 'react';
import { withRouter } from 'react-router-dom';

class StudyCards extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cards:[],
            flipped: false
        };
        
    };

    componentDidMount() {
        this.props.fetchDeck(this.props.match.params.deckId)
            .then(res => {
                console.log(res)
                this.setState({
                    cards: res.payload.cards
                });
            });
    };


    render(){
        if(this.state.cards.length ===){
            return null
        };
        // let array = Object.values(this.props.cards)
        debugger
        return(
            <div>
                {(this.state.cards[0]).question}
                {console.log("hello")}
            </div>
        )
    }
};

export default withRouter(StudyCards);