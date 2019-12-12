import React from 'react'; 
import { withRouter } from 'react-router';

class TagForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: "",
            deck: this.props.deck,
            tags: "",
            deckTags: this.props.deckTags,
        }
        
        this.handleClick = this.handleClick.bind(this);
    };

    componentDidMount(){
        // debugger;
        this.props.fetchTags()
            .then(() => {
                this.props.fetchDeckTags(Object.keys(this.props.deck))
                .then(res => {
                    debugger
                    // this.setState({tags: res.tags})
                    this.setState({deckTags: res.deckTags})
                })
            })
    };


    componentDidUpdate(oldProps){
        // debugger
        //this.setState({ deckTags: this.props.tags })
    };

    handleClick(e, field){
        
        e.preventDefault();
        // debugger
        let deck_tag = {
            tag_id: e.target.value,
            deck_id: this.state.deck.id
        }
        // debugger
        this.props.createDeckTag(deck_tag);
        // console.log(this.state.deckTags)
        console.log(e.target)
        let copy = this.state.deckTags.slice();
        let obj = { id: parseInt(e.target.value), name: e.target.name };
        
       
        this.setState({deckTags: copy}, () => {
            console.log(this.state.deckTags)
        })
        // debugger   
    }

    render(){
        if(!this.props.tags) return null;
        if(!this.props.deckTags) return null;
        debugger
        let tags = Object.values(this.props.tags).map( tag => {
            return <li onClick={this.handleClick}
                        key={tag.id}
                        value={tag.id}
                        name={tag.name}>
                        {tag.name}</li>
        })
        if (!this.state.deckTags) return null;
        console.log(this.props.tags)
        // let deckTags = this.props.tags.map( deckTag => {
        //     return <li key={deckTag.id}>{deckTag.name}</li>
        // })

       // debugger
       
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
                <div>Current Tags
                    {/* {deckTags} */}
                </div>
            </div>
        )
    }
};

export default withRouter(TagForm); 