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
        // debugger
        return(
            <div>hello
                {console.log(Object.values(this.props.cards))}
            </div>
        )
    }
};

export default withRouter(StudyCards);