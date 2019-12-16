import React from 'react';
import { withRouter } from 'react-router-dom';
import ScoreBar from '../scores/scorebar';
import ProgressBarContainer from '../progressbar/progressbar_container'


class StudyCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      currentCard: "",
      scores: "",
      flipped: false,
      end: false
   
    };

    this.handleClick = this.handleClick.bind(this);
    this.goBack = this.goBack.bind(this);
    this.restart = this.restart.bind(this);
   
  }

  componentDidMount() {
    this.props.fetchDeck(this.props.match.params.deckId).then(res => {
      this.setState({
        cards: res.payload.cards,
        currentCard: res.payload.cards[0]
      });
    });
    this.props.fetchScores(this.props.match.params.deckId, this.props.user)
      .then(res => {
        this.setState({ scores: res.scores })
      });
  }

  // componentDidUpdate(oldProps){
  //   debugger
  //   // if (oldProps.currCard.id !== this.props.currCard.id) {
  //   //   this.props.fetchScores(this.props.match.params.deckId, this.props.user)
  //   //     .then(res => {
  //   //       this.setState({ scores: res.scores })
  //   //     });
  //   //   }
  // }

  goBack(){
    event.preventDefault();
    let i = this.state.cards.indexOf(this.state.currentCard);
    let flipStatus = this.state.flipped;

    if(i === 0 && flipStatus === false){
      return
    };

    if (i === 0 && flipStatus === true) {
      this.setState({
        flipped: false
      });
    };

    if(flipStatus === false){
      this.setState({
        currentCard: this.state.cards[i - 1],
        flipped: false
      });
    };

    if(flipStatus === true){
      this.setState({
        currentCard: this.state.cards[i],
        flipped: false
      });
    }; 
  };

  restart(){
    event.preventDefault()
    this.setState({
      currentCard: this.state.cards[0],
      flipped: false,
      end: false
    })
  }

  handleClick() {
    event.preventDefault();
    let i = this.state.cards.indexOf(this.state.currentCard);
    let flipStatus = this.state.flipped;

    if (this.state.cards[i + 1] === undefined) {
      this.setState({
        flipped: true
      });
    }
    else if (flipStatus === false) {
      this.setState({
        flipped: true
      });
      
    } else {
      this.setState({
        currentCard: this.state.cards[i + 1],
        flipped: false
      });
    }

    if(this.state.cards[i + 1 ] === undefined && this.state.flipped === true) {
      this.setState({
        end: true,
        flipped: null,
        currentCard: ""
      });
    };
  }

  render() {
    if (this.state.cards.length === 0) {
      return null;
    }
    let goBack;
    let currCard1;
    let currCard2;
    let endCard;
    let scoreBar;
    
    if(this.state.cards.indexOf(this.state.currentCard) !== 0 || this.state.flipped !== false){
      goBack = <div className='go-back' onClick={this.goBack}>Go Back To Previous Question</div>
    }

    if (this.state.cards.indexOf(this.state.currentCard) === 0 || this.state.flipped !== false) {
      goBack = <div className='go-back'></div>
    }

    if(this.state.end === true){
      goBack = <div className='go-back'></div>
    }

    if (this.state.flipped === false) {
      currCard1 = this.state.currentCard.question;
      scoreBar = <div className="tracking">
        <div onClick={this.handleClick} className="scorebar">
                      Reveal the Answer
                    </div>
                </div>;
      
    } else if (this.state.flipped === true) {
      currCard2 = this.state.currentCard.answer;
      scoreBar = (
        <div className="tracking">
          <div className="tracking-message">How well did you know this?</div>
          <div onClick={this.handleClick}>
            <ScoreBar
              deck={this.props.deck}
              cards={this.props.cards}
              currCard={this.state.currentCard}
              saveScore={this.props.saveScore}
              updateScore={this.props.updateScore}
              fetchScore={this.props.fetchScore}
              user={this.props.user}
              //scores={this.state.scores}
              fetchDeck={this.props.fetchDeck}
              fetchScores={this.props.fetchScores}
            />
          </div>
        </div>
      );
    } else if (this.state.end === true) {
      endCard = "You've reached the end of all the cards"
      scoreBar = (
        <div className="again">
          <div onClick={this.restart} className="scorebar">
            Study Again?
            </div>
        </div>
      );
    }

    return (
      <div className="progressBar">
        <div className="mastery">
          <div className='m-nav'><ProgressBarContainer /></div>
        </div>

        <div className="study" >
          {goBack}
          <div className="study-card">
            <div className="front">{currCard1}</div>
            <div className="back">{currCard2}</div>            
            <div className="back">{endCard}</div>            
        </div>

          <div>{scoreBar}</div>
      </div>
    </div>
    );
  }
};

export default withRouter(StudyCards);