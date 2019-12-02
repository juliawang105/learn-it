import React from 'react';

class ScoreBar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='scorebar'>
                <div className='score'>1</div>
                <div className='score'>2</div>
                <div className='score'>3</div>
                <div className='score'>4</div>
                <div className='score'>5</div> 
            </div>
        )
    }
}

export default ScoreBar