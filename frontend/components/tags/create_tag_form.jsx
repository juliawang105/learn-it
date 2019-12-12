import React from 'react'; 
import { withRouter } from 'react-router';

class TagForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: "",
            deck: this.props.deck,
            tags: "",
            deckTags: [],
            update: false
        }
        
        this.handleClick = this.handleClick.bind(this);
    };

    componentDidMount(){
        // debugger;
        this.props.fetchTags()
            .then(() => {
                this.props.fetchDeckTags(Object.keys(this.props.deck))
                .then(res => {
                    // debugger
                    let deckTags = Object.values(res.deckTags).map( deckTag => {
                        return deckTag.tag.name
                    });
                    // this.setState({tags: res.tags})
                    this.setState({deckTags: deckTags})
                })
            })
    };


    componentDidUpdate(oldProps){
        // debugger
        let old = Object.keys(oldProps.deckTags);
        let newProps = Object.keys(this.props.deckTags);
       if(old.length !== newProps.length){
           this.props.fetchDeckTags(Object.keys(this.props.deck))
               .then(res => {
                   // debugger
                   let deckTags = Object.values(res.deckTags).map(deckTag => {
                       return deckTag.tag.name
                   });
                   // this.setState({tags: res.tags})
                   this.setState({ deckTags: deckTags })
               });
        } ; 
    };

    handleClick(e){
        
        e.preventDefault();
        // debugger
        let deck_tag = {
            tag_id: e.target.value,
            deck_id: Object.keys(this.state.deck)[0]
        }

        this.props.createDeckTag(deck_tag)
            .then( (res) => {
                // debugger
                // let name = res.deckTag.tag.name
                // let copy = this.state.deckTags.push(name);
                this.setState({update: !this.state.update})
                // debugger
            }) 
    }

    render(){
        if(!this.props.tags) return null;
        if(!this.props.deckTags) return null;
        //debugger
        let tags = Object.values(this.props.tags).map( tag => {
            return <li onClick={this.handleClick}
                        key={tag.id}
                        value={tag.id}>
                        {tag.name}</li>
        })
        if (!this.state.deckTags) return null;
        
        // debugger
        let deckTags = (this.state.deckTags).map( deckTag => {
            return <p key={deckTag.id}>{deckTag}</p>
        })

    //    debugger
       
        return(
            <div className='tags'>
                <div className='add-tag'>
                    Add tags
                    {tags}
                </div>
                <div>Current Tags
                    {deckTags}
                </div>
            </div>
        )
    }
};

export default withRouter(TagForm); 