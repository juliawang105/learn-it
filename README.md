# Learn It

[Live Demo Here!](https://brainscape-learnit.herokuapp.com/#/)

## What is Learn It? 

Inspired by Brainscape, Learn It serves as an educational tool to serve learners and educators in their journey of acquiring knowledge and mastering different contents. This platform provides the learners the opportunity to create a personalized learning stack of information and to save decks created by others. 

Using technologies such as Rails, PostgreSQL, React.js, and Redux, Learn It was built from scratch in under two weeks. Currently, this version allows the creation of decks and cards and the ability to save and unsave decks created by other users. 

## Key Features
* User Authorization
  * User passwords are encrypted. 
  * Users can sign in as a demo user to browse the features of this site. 
* Decks 
  * Logged in users can view all the decks that exist. 
  * Users can delete and edit their own created decks. 
* Cards 
  * Users can create/edit/delete cards from their created decks. 
* Saves 
  * Logged in users can save decks to their study stack. The information is displayed on their user profile paged. 
  
## Decks 

When creating decks, one of the challenges that I ran into was during the rendering of the deck's show page. At first, I was not able to pull all the cards associated with that deck when the deck itself mounted. In order to optimize efficiency, I edited my payload so that when a fetch deck action was called, the cards themselves would be fetched simultaneously. 

## Cards 

I chose for my cards edit form to exist as a modal to allow for a cleaner, more user friendly interface. Since my cards are nested under specific decks, I cleaned up my modal code to allow data to be passed through. 

## Restricting Access 

It is crucial that users do not have ability to edit or delete decks and cards that are not created by them. My backend code restricted this access, but I also wanted to eliminate potential errors on the frontend and achieved this by writing code that providing conditionals for the appearance of certain functional buttons. 

``` javascript 

  render(){
        let button;
        let editButton;

        if(this.props.deck.creator_id === parseInt(this.props.user)){
            button = <button className='card-delete' 
                        onClick={() => this.handleClick()}>Delete Card
                    </button> 
            editButton = <button className="edit-close" 
                        onClick={() => this.props.openModal('edit-card', this.props.card)}>Edit Card
                    </button>
            };

        return( 
            <div className="cards">
                <div className='card-controls'>
                    {button}
                    {editButton}
                </div>
                    
                <label>Question
                    <div className="questions"> {this.props.card.question} </div>
                </label>
                    
                <label>Answer
                    <div className="answers"> {this.props.card.answer} </div>
                </label>
                    
            </div>
        );
    };
};
    


