# Learn It

[Live Demo](https://brainscape-learnit.herokuapp.com/#/)

![splash](https://i.pinimg.com/originals/56/68/a8/5668a85e957fc10902bbe7042e44d946.gif)

## What is Learn It? 

Inspired by Brainscape, Learn It serves as an educational tool to serve learners and educators in their journey of acquiring knowledge and mastering different contents. Built using technologies such as Rails, PostgreSQL, React.js, and Redux, this platform provides the learners the opportunity to create a personalized learning stack of information and to save decks created by others. Continue to read on to see key features and the approaches I used to solve the challenges along the way. 

## Technologies Used
* Ruby on Rails 
* PostgreSQL
* React.js 
* Redux
* HTML5
* CSS3

## Features
* User Authorization is secured using BCrypt.
* User Show Page 
	* Users can login in to see their created decks and saved decks for future studying. 
* Decks
	* Decks index page displays all decks created by users but deleting ability is restricted to deck creators only.
	*  Deck show page displays all cards associated with the specific deck.
	*  Logged in users have the ability to create and browse decks. 
* Cards
	* Logged in users can create cards nested under created decks. 
* Studying 
	* Logged in users can study any decks of cards. 
	* Scores are saved and calculated in real time to help users track their mastery score. 
* Search 
	* Logged in users can search for specific decks according to deck names. 

### Deck and Card CRUD (Creation, Edit, Update Delete)
Deck and card CRUD features are done through the usage modals. Data is passed into the modals for update functionality so information is pre-filled in. 

It is crucial that users do not have ability to edit or delete decks and cards that are not created by them. My backend code restricted this access, but I also wanted to eliminate potential errors on the frontend and achieved this by writing code that providing conditionals for the appearance of certain functional buttons. 

![crud](https://i.pinimg.com/originals/e3/2e/e9/e32ee9ef6f257143cbfdf97d881d26e9.gif)

``` javascript 
 render(){
       let button;
       let editButton;

       if(this.props.deck.creator_id === parseInt(this.props.user)){
           button = <button className='card-delete' 
                       onClick={() => this.handleClick()}>Delete Card
                   </button> 
           editButton = <button className="edit-close" 
                       onClick={() => this.props.openModal('edit-card', this.props.card)}>
                       Edit Card
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
    
```

### Deck Studying 
Users can study decks by going through the cards and rating how well they knows the answers for each card. The scores update live via the progress bar and that displays the most current mastery score percentages. Scores are unique to user and deck and scores update according to specific cards. Percentages for the scores are calculated based on total number of cards per deck and the total number of points where 5 is the max per card. Here are the backend and frontend codes that displays score updates. 

![study](https://i.pinimg.com/originals/0f/6f/85/0f6f8505ab6dccc6fa177a46f1c6c43d.gif)
```javascript
//scores backend 
def update 
  @score = current_user.scores.find_by(card_id: params[:score][:card_id])
   if @score.update(score_params)
       render :show
   else 
       render json: @score.errors.full_messages, status: 422
   end
end

private 
def score_params
   params.require(:score).permit(:learner_id, :card_id, :score, :deck_id)
end

//score bar component 
handleClick(e) {
   e.preventDefault();
   this.setState({ score: e.target.value });
  
   let score = {
     deck_id: this.props.deck.id,
     learner_id: this.props.user,
     card_id: this.props.currCard.id,
     score: parseInt(e.target.value)
   };
 
   let scores = Object.values(this.state.scores).map(score => {
     return score.card_id;
   });
   
   if (Object.keys(this.state.scores).length === 0) {
     this.props.saveScore(score);
     return
   };
   if (scores.includes(score.card_id)) {
     this.props.updateScore(score);
     return
   } else if (!scores.includes(score.card_id)) {
     this.props.saveScore(score);
     return
   };
 };
   
```
### Search 
Users can search for decks via deck names. To build this feature, I passed in a query string via my AJAX call and checked for similarities using Active Record in the backend. This allows for specific deck id access on the search show page and then React's componentDidMount() function can fetch the appropriate decks. For a user friendly experience, pressing "enter" takes the user to the search show page but only when there is input in the search bar. 

![search](https://i.pinimg.com/originals/79/24/97/79249763a4ab7c85f7dd03dceaa963b0.gif)
```javascript
handleInput(){
    event.preventDefault();
    this.setState({input: event.target.value})
    document.addEventListener('keydown', this.enterFunction)
};
enterFunction(e) {
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
                let resultIds = Object.keys(res.searchDecks);
                this.setState({ results: resultIds })
                this.props.history.push(`/searches?ids=${resultIds}`)
                this.setState({ input: "" })
            })
    };   
};
```
