import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            input: ""
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.enterFunction = this.enterFunction.bind(this);
    };

    componentDidMount(){
        document.addEventListener('keydown', this.enterFunction)
    }

    handleInput(){
        event.preventDefault();
        this.setState({input: event.target.value})
    }

    enterFunction(e) {
        // e.preventDefault();
        if (e.keyCode === 13) {
            this.handleSearch()
        };
    };


    handleSearch(){
        this.props.search(this.state.input)
            .then( res => {
                console.log(res)
            })
    }

    render(){
       //debugger
        return(
            <div className="searchbar">
                <div tabIndex="0" onKeyDown={this.enterFunction}></div>
                <input onChange={this.handleInput} type="text" value={this.state.input}placeholder='Search by Deck Names'/>
            </div>
        )
    };
};

export default SearchBar; 