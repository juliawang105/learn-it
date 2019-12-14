import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props)
    };

    render(){
        return(
            <div className="searchbar">
                <input type="text" name="" id="" placeholder='Search by Deck Names'/>
            </div>
        )
    };
};

export default SearchBar; 