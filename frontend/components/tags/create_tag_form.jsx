import React from 'react'; 
import { withRouter } from 'react-router';

class TagForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: "",
            deck: this.props.deck
        }

        this.handleClick = this.handleClick.bind(this);
    }

    update(field){
        return(e) => {
            this.setState({[field]: e.target.value })
        }
    }

    handleClick(e){
        // debugger
        e.preventDefault();
        let tag = this.state
        let deck_id = this.state.deck
        this.props.createTag(tag)
            .then( res => {
                // debugger 
                let deck_tag = {
                    tag_id: res.tag.id,
                    deck_id: deck_id
                }
                this.props.createDeckTag(deck_tag)
            })
    }

    render(){
        return(
            <div className='tags'>
                <div className='add-tag'>Add Tags</div>
                <input onChange={this.update('name')} type="text" value={this.state.name}/>
                <button onClick={this.handleClick }>Add Tag</button>
            </div>
        )
    }
};

export default withRouter(TagForm); 