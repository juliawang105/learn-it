import React from 'react';
import { withRouter } from 'react-router-dom';

class StudyCards extends React.Component{
    constructor(props){
        super(props)
    };

    componentDidMount() {
        this.props.fetchDeck(this.props.match.params.deckId)
    };


    render(){
        let array = Object.values(this.props.cards)
        
        return(
            <div>
                {/* {Object.values(this.props.cards)[0].question} */}
                {console.log(array[1].question)}
            </div>
        )
    }
};

export default withRouter(StudyCards);