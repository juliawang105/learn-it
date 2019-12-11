import React from 'react'; 
import { withRouter } from 'react-router';
import TagList from '../tags/tag_list';

class TagForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: "",
            deck: this.props.deck,
            tags: this.props.tags,
            update: false
        }
        
        this.handleClick = this.handleClick.bind(this);
    }

    update(field){
        return(e) => {
            this.setState({[field]: e.target.value })
        }
    }


    handleClick(e){
        
        e.preventDefault();
        let name = this.state.name;
        let deck = this.state.deck;
        let tag = {
            name,
            deck
        };
        this.props.createTag(tag)
            .then( res => {
                
                let deck_tag = {
                    tag_id: res.tag.id,
                    deck_id: deck
                }
                
                this.props.createDeckTag(deck_tag)
                    
            })
            
            
        this.setState({ tags: this.state.tags.push(this.state.name) })
        this.setState({ update: !this.state.update })
        
        
    }

    render(){
        if(!this.state.tags) return null;
        return(
            <div className='tags'>
                <div className='add-tag'>Add Tags</div>
                <input onChange={this.update('name')} type="text" value={this.state.name}/>
                <button onClick={this.handleClick }>Add Tag</button>
                {/* <TagList
                    tagNames={this.state.tags}
                    fetchDeck={this.props.fetchDeck} /> */}
            </div>
        )
    }
};

export default withRouter(TagForm); 