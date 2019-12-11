import React from 'react'; 
import { withRouter } from 'react-router';
import TagList from './tag_list';

class TagForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: "",
            deck: this.props.deck,
            tags: this.props.tags,
            update: false
        }
        // console.log("constructor: ", this.props)
        this.handleClick = this.handleClick.bind(this);
    }

    update(field){
        return(e) => {
            this.setState({[field]: e.target.value })
        }
    }

    // componentDidUpdate(oldProps){
    //     if (this.state.tags.length !== this.props.tags.length) {
    //         this.setState({tags: this.props.tags})
    //     }
    // }

    handleClick(e){
        // debugger
        e.preventDefault();
        let name = this.state.name;
        let deck = this.state.deck;
        let tag = {
            name,
            deck
        };

        // let deck_id = this.state.deck
        this.props.createTag(tag)
            .then( res => {
                // debugger 
                let deck_tag = {
                    tag_id: res.tag.id,
                    deck_id: deck
                }
                // debugger
                this.props.createDeckTag(deck_tag)
                    
            })
            
            // debugger
        this.setState({ tags: this.state.tags.push(this.state.name) })
        this.setState({ update: !this.state.update })
        this.props.fetchDeck(this.props.deck)
        // this.props.rerenderParentCallback();
    }

    render(){
        if(!this.state.tags) return null;
        return(
            <div className='tags'>
                <div className='add-tag'>Add Tags</div>
                <input onChange={this.update('name')} type="text" value={this.state.name}/>
                <button onClick={this.handleClick }>Add Tag</button>
                <TagList
                    tags={this.props.tags}
                    deck={this.props.deck}
                    fetchDeck={this.props.fetchDeck}
                    update={this.state.update} />
            </div>
        )
    }
};

export default withRouter(TagForm); 