import React from 'react';
import { withRouter } from 'react-router-dom';

class StudyCards extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cards:[],
            currentCard: "",
            flipped: false
        };

        this.handleClick = this.handleClick.bind(this);
        
    };

    componentDidMount() {
        this.props.fetchDeck(this.props.match.params.deckId)
            .then(res => {
                console.log(res)
                this.setState({
                    cards: res.payload.cards,
                    currentCard: res.payload.cards[0]
                });
         });
    };

    handleClick(){
        event.preventDefault();
        // debugger
        let i = this.state.cards.indexOf(this.state.currentCard); 
        let flipStatus = this.state.flipped;

        if(this.state.cards[i+1] === undefined){
            this.setState({
                flipped: null
            })
        } else if (flipStatus === false) {
            this.setState({
                flipped: true
            })
        } else {
            this.setState({
                currentCard: this.state.cards[i+1],
                flipped: false
            })
        };

    };


    render(){
        if(this.state.cards.length === 0 ){
            return null
        };
        
        // debugger
        let currCard;
        let className;

        if(this.state.flipped === false){
            currCard = this.state.currentCard.question;
            className = 'study-card front'
        } else if (this.state.flipped === true) {
            currCard = this.state.currentCard.answer
            className = "study-card back";
        } else if (this.state.flipped === null){
            currCard = (
                <div>
                    You've reached the end of this study pack.
                </div>
            )
        }

        return(
            <div className="study" onClick={this.handleClick}>
                <div className={className}>
                    {currCard}
                </div>
            
            </div>
        )
    }
};

export default withRouter(StudyCards);