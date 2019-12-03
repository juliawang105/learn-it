import React from 'react';
import { parse } from 'path';

class ScoreBar extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            score: '',
        };

        this.handleClick = this.handleClick.bind(this);

    };

    handleClick(e){
        e.preventDefault();

        // debugger
        
        this.setState({score: e.target.value});
        let score = {
            learner_id: this.props.user,
            card_id: this.props.currCard.id,
            score: parseInt(e.target.value)
            
        };
        
        debugger
      
        this.props.saveScore(score)
    };

    render(){
        // debugger
       
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