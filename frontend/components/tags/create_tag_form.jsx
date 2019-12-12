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
            update: false,
            open: false
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
    };

    componentDidMount(){
        this.props.fetchTags()
            .then(() => {
                this.props.fetchDeckTags(Object.keys(this.props.deck))
                .then(res => {
                    
                    let deckTags = Object.values(res.deckTags).map( deckTag => {
                        return deckTag.tag.name
                    });
                    this.setState({deckTags: deckTags})
            })
        })
    };


    componentDidUpdate(oldProps){
        let old = Object.keys(oldProps.deckTags);
        let newProps = Object.keys(this.props.deckTags);
       
        if(old.length !== newProps.length){
           this.props.fetchDeckTags(Object.keys(this.props.deck))
               .then(res => {
                   
                   let deckTags = Object.values(res.deckTags).map(deckTag => {
                       return deckTag.tag.name
                   });
                  
                   this.setState({ deckTags: deckTags })
               });
        } ; 
    };

    toggleDropdown() {
        let s = !this.state.open;
        this.setState({open: s});
    }

    handleClick(e){
        
        e.preventDefault();
      
        let deck_tag = {
            tag_id: e.target.value,
            deck_id: Object.keys(this.state.deck)[0]
        }

        this.props.createDeckTag(deck_tag)
            .then( (res) => {
                this.setState({update: !this.state.update})
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
        
        let deckTags = (this.state.deckTags).map( deckTag => {
            return <p key={deckTag.id}>{deckTag}</p>
        })
       
        return(
            <div className='tags'>
                <div className='add-tag'>
                    <div onClick={this.toggleDropdown}>
                        Add tags
                    </div>
                    {this.state.open && <ul>
                        {tags}
                    </ul>}
                </div>

                <div>Current Tags
                    {deckTags}
                </div>
                
            </div>
        )
    }
};

export default withRouter(TagForm); 