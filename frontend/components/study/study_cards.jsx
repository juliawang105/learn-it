import React from 'react';
import { withRouter } from 'react-router-dom';
import ScoreBar from '../scores/scorebar';
import ProgressBar from '../progressbar/progressbar'


class StudyCards extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cards:[],
            currentCard: "",
            scores: this.props.scores,
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
        
    //    console.log(this.props.scores)
        let currCard1;
        let currCard2;
        let scoreBar;
        // let className;

        if(this.state.flipped === false){
            currCard1 = this.state.currentCard.question;
            scoreBar = (
                <div>
                    Reveal the Answer
                </div>
            )
            // className = 'study-card'
        } else if (this.state.flipped === true) {
            currCard2 = this.state.currentCard.answer
            scoreBar = (
              <div>
                <ScoreBar
                  deck={this.props.deck}
                  cards={this.props.cards}
                  currCard={this.state.currentCard}
                  saveScore={this.props.saveScore}
                  updateScore={this.props.updateScore}
                  fetchScore={this.props.fetchScore}
                  user={this.props.user}
                  scores={this.props.scores}
                  fetchDeck={this.props.fetchDeck}
                />
              </div>
            );
        } else if (this.state.flipped === null){
            currCard1 = (
                <div>
                    You've reached the end of this study pack.
                </div>
            )
        }
        
        return (
          <div>
              <ProgressBar 
              scores={this.props.scores} />
                <div className="study" onClick={this.handleClick}>
                <div className="study-card">
                    <div className="front">{currCard1}</div>
                    <div className="back">{currCard2}</div>
                </div>
                {scoreBar}
                </div>
          </div>
        );
    }
};

export default withRouter(StudyCards);