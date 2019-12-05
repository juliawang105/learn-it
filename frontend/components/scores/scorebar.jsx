import React from 'react';

class ScoreBar extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            score: '',
        };

        this.handleClick = this.handleClick.bind(this);

    };

    // componentDidMount(){
    //     this.props.fetchDeck(this.props.match.params.deckId)
    // }

    handleClick(e){
        e.preventDefault();
        this.setState({score: e.target.value});
        let score = {
          learner_id: this.props.user,
          card_id: this.props.currCard.id,
          score: parseInt(e.target.value)
        };
    
        // let sum = 0;

        // let cardScores = Object.values(this.props.scores)
        // for(let i = 0; i < cardScores.length; i ++ ){
        //     sum += cardScores[i].score;
        // }

        // let total = ((sum) / (5 * this.props.cards.length)) * 100
        // console.log(total);

        let cards = Object.values(this.props.cards).map( card => {
            return (
                card.id
            );
        })
        debugger

        if(!cards.includes(score.card_id)){
            this.props.saveScore(score)
        } else {
            this.props.updateScore(score)
        }
        
        
    }

    render(){
      
        return(
            <div className='scorebar'>
                <button onClick={this.handleClick} className='score' value='1'>1</button>
                <button onClick={this.handleClick} className='score' value='2'>2</button>
                <button onClick={this.handleClick} className='score' value='3'>3</button>
                <button onClick={this.handleClick} className='score' value='4'>4</button>
                <button onClick={this.handleClick} className='score' value='5'>5</button> 
            </div>
        )
    }
}

export default ScoreBar