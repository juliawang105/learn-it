import React from 'react'; 
import { withRouter } from 'react-router';
import TagList from '../tags/tag_list';
import { ETIME } from 'constants';

class TagForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: "",
            deck: this.props.deck,
            tags: "",
            update: false
        }
        
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.props.fetchTags()
            .then(res => {
                this.setState({tags: res.tags})
            })
    }

    update(field){
        return(e) => {
            this.setState({[field]: e.target.value })
        }
    }


    handleClick(e){
        
        e.preventDefault();
        debugger
        let deck_tag = {
            tag_id: e.target.value,
            deck_id: this.state.deck
        }
        debugger
        this.props.createDeckTag(deck_tag)
                    
        
            
    //     // this.setState({ tags: this.state.tags.push(this.state.name) })
    //     // this.setState({ update: !this.state.update })
        
        
    }

    render(){
        if(!this.state.tags) return null;

        let tags = Object.values(this.state.tags).map( tag => {
            return <li onClick={this.handleClick}
                        key={tag.id}
                        value={tag.id}>
                        {tag.name}</li>
        })

       // debugger
        debugger
        return(
            <div className='tags'>
                <div className='add-tag'>
                    Add tags
                    {tags}
                </div>
                {/* <input onChange={this.update('name')} type="text" value={this.state.name}/> */}
                {/* <button className="tag-button" onClick={this.handleClick }>Add Tag</button> */}
                {/* <TagList
                    tagNames={this.state.tags}
                    fetchDeck={this.props.fetchDeck} /> */}
                <div>Current Tags</div>
            </div>
        )
    }
};

export default withRouter(TagForm); 