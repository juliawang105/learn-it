import React from 'react';
import SaveItem from './save_item';


class UserShow extends React.Component{
    constructor(props){
        super(props)

        
    };

    componentDidMount(){
        let arr = this.props.saves; 
        for(let i = 0; i < arr.length; i ++){
            this.props.fetchSave(arr[i].id)
        };

        this.props.fetchDecks();
        // debugger;
    };


    render(){
        // debugger
        let saves = this.props.saves.map( (save) => {
            if(!save){
                return null;
            }
            return (<div>
                <SaveItem 
                key={save.id}
                save={save}
                fetchSave={this.props.fetchSave} 
                fetchDecks={this.props.fetchDecks}
                decks={this.props.decks}
                user={this.props.user}/>
            </div>
        )
         });

        return(
            <div className="user-show">
                <div className="saved">Your Saved Decks</div>
                <div className="save-list">{saves}</div>
            </div>
        )
        
    }
};

export default UserShow; 