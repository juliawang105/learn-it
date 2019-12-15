import React from 'react';
import { withRouter } from 'react-router-dom';
//import SearchResults from './search_results';

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            input: "",
            results: "",
            loaded: false
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.enterFunction = this.enterFunction.bind(this);
    };

    // componentDidMount(){
    //     this.props.clearAllCards()
    // }
    
    handleInput(){
        event.preventDefault();
        this.setState({input: event.target.value})
        document.addEventListener('keydown', this.enterFunction)
    }

    enterFunction(e) {
        // e.preventDefault();
        if (e.keyCode === 13) {
            this.handleSearch()
        }  
    };

    handleSearch(){
        if(this.state.input === ""){
            return; 
        } else {
            this.props.search(this.state.input)
                .then(res => {
                    // console.log(res)
                    let resultIds = Object.keys(res.searchDecks);
                    this.setState({ results: resultIds })
                    this.props.history.push(`/searches?ids=${resultIds}`)
                    this.setState({ input: "" })

                })
        };
        
    }

    render(){
        
        return(
            <div className="searchbar">
                <div tabIndex="0" onKeyDown={this.enterFunction}></div>
                <input onChange={this.handleInput} type="text" value={this.state.input}placeholder="Search For Decks"/>   
            </div>
           
        )
    };
};

export default withRouter(SearchBar); 