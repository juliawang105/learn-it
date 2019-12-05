import React from 'react';
// import { withRouter }

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
    
        let scores = Object.values(this.props.scores).map( score => {
            return (
                score.card_id
            );
        })
        // debugger
        if ( Object.keys(this.props.scores).length === 0){
            this.props.saveScore(score);
        }
        if(!scores.includes(score.card_id)){
            this.props.saveScore(score);  
        } 
        
        if (scores.includes(score.card_id)) {
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