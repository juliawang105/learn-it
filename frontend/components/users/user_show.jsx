import React from 'react';
import SaveItem from './save_item';
import DeckIndexItem from '../decks/deck_index_item';


class UserShow extends React.Component{
    constructor(props){
        super(props)
        // this.state={
        //     userDecks: ""
        // }
        
    };

    componentDidMount(){
        // let arr = this.props.saves; 
        // for(let i = 0; i < arr.length; i ++){
        //     this.props.fetchSave(arr[i].id)
        // };
        this.props.fetchDecks()
        //this.props.clearAllCards()
        //     .then( res => {
        //         console.log(res)
        //     })
        // // debugger;
    };


    render(){
        // debugger
        if(!this.props.decks) return null; 

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
                session={this.props.session}
                deleteDeck={this.props.deleteDeck}
                session={this.props.session}
                openModal={this.props.openModal}
                closeModal={this.props.closeModal}
                />
            </div>
        )
         });

        let allDecks = Object.values(this.props.decks) 
        
        let created = allDecks.filter( deck => {
            return deck.creator_id === parseInt(this.props.session)
        }); 

        let createdDecks = created.map( deck => {
            return (<div>
                <DeckIndexItem 
                    key={deck.id} 
                    deck={deck} 
                    deleteDeck={this.props.deleteDeck}
                    session={this.props.session}
                    openModal={this.props.openModal}
                    closeModal={this.props.closeModal}/>
            </div> )
        })

        //debugger
        return(
            <div className="user-show">
                <div className="saved">Your Created Decks</div>
                <div className="user-decks">{createdDecks}</div>
                <div className="saved">Your Saved Decks</div>
                <div className="save-list">{saves}</div>
                
            </div>
        )
        
    }
};

export default UserShow; 