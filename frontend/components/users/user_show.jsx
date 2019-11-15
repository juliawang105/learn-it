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
            return (<li>
                <SaveItem 
                key={save.id}
                save={save}
                fetchSave={this.props.fetchSave} 
                fetchDecks={this.props.fetchDecks}
                decks={this.props.decks}/>
            </li>
        )
         });

        return(
            
            <div>
                {saves}
            </div>
        )
        
    }
};

export default UserShow; 