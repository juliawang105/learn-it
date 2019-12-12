import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CardItem from '../cards/card_item';
import CreateCardContainer from '../cards/create_card_container';
import StudyCards from '../study/study_cards';
import TagForm from '../tags/create_tag_form';
import TagList from '../tags/tag_list';

class DeckShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tags: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.fetchDeck = this.props.fetchDeck.bind(this);
        //this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
          
    }

    componentDidMount(){
        this.props.fetchDeck(this.props.match.params.deckId)
            .then( res => {
                // debugger
                this.setState({tags: res.payload.tags})
               
            });
        // this.props.fetchTags()
        //     .then( res =>)
        
    };

    componentDidUpdate(oldProps) {
        // debugger;
        if (oldProps.match.params.deckId !== this.props.match.params.deckId) {
            this.props.fetchDeck(this.props.match.params.deckId)
                .then(res => {
                    //debugger
                    this.setState({ tags: res.payload.tags })

                });
        if(Object.keys(oldProps.tags).length !== Object.keys(this.props.tags).length){
            this.props.fetchDeck(this.props.match.params.deckId)
                .then(res => {
                    //debugger
                    this.setState({ tags: res.payload.tags })

                });
            }
        };
 
    };
   
    handleClick(e) {
        e.preventDefault();
        let save = {deck_id: this.props.deck.id, learner_id: this.props.user};
        let saves = Object.values(this.props.saves);

        if (saves.length === 0){
            this.props.saveDeck(save)
            return; 
        } 
        
        for (let i = 0; i < saves.length; i ++ ) {
            let saved = saves[i]; //saved = pojo 
            if(saved.deck_id === this.props.deck.id){
                this.props.unsaveDeck(saved.id)
                // .then(() => this.setState({ following: false }))
                return    
            }          
        } 
        this.props.saveDeck(save).then( () => this.setState({following: true})); 
    };

    // rerenderParentCallback() {
    //     this.forceUpdate();
    // };

    render(){
        
        let deck = this.props.deck;
        if(!deck) return null;
        
        let cards = this.props.cards;
        if (!cards) return null

        let deck_cards = cards.map( (card) => {
            return < CardItem 
                key={card.id}
                card={card}
                fetchCard={this.props.fetchCard }
                deleteCard={this.props.deleteCard} 
                user={this.props.user}
                deck={deck}
                openModal={this.props.openModal}
                fetchDeck={this.props.fetchDeck}/>
        });

        let tags = this.state.tags;
        if (!tags) return null;

        let save_array = Object.values(this.props.saves);
            save_array = save_array.map( (save) => {
                return save.deck_id
            })
        let createButton;
        
        if(deck.creator_id === parseInt(this.props.user)){
            createButton = <button className='card-button' 
                onClick={() => this.props.openModal('card', deck.id)}><i className="fas fa-plus-circle"></i>Add New Card</button>
        }
        
        let saveButton;
        if (!save_array.includes(this.props.deck.id)) {
            saveButton = <button className='card-button' onClick={this.handleClick}>Save Deck</button>
        } else if (save_array.includes(this.props.deck.id)) {
            saveButton = <button className='card-button' onClick={this.handleClick}>Unsave Deck</button>
        };
    
        debugger
        return(
            <div className="deck_show">
                <div className="show">
                    <div className="deck_title">{deck.name} 
                        
                         <div>
                            <TagForm 
                            fetchTags={this.props.fetchTags}
                            fetchDeck={this.props.fetchDeck}
                            deck={this.props.deck}
                            tags={this.state.tags}
                            createDeckTag={this.props.createDeckTag}/> 
                            <TagList 
                                tags={this.props.tags} />
                                {/* deck={this.props.deck}
                                fetchDeck={this.props.fetchDeck}
                                fetchTags={this.props.fetchTags}
                                update={this.state.update} /> */}
                         </div>
                    </div>
                        
                        {createButton}
                        <br/>
                        {saveButton}
                    
                        <Link id='study' to={`/decks/${this.props.deck.id}/study`}>Study this Deck!</Link>
                    
                        {deck_cards}
                        
                </div>

            </div>
           
            )
        }
    };


export default withRouter(DeckShow);