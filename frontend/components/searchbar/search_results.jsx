import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchResults extends React.Component{
    constructor(props){
        super(props)
    };

    componentDidMount(){
        if(this.props.history.location)
    }

    render(){
        debugger
        return(
            <div>
                Hello 
            </div>
        )
    }
};

export default withRouter(SearchResults)