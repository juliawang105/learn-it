import React from "react";
import { withRouter } from 'react-router'

class TagList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            tags: null,
            update: false 
        }
    }
    componentDidMount(){
        // this.props.fetchDeck(this.props.deck.id)
        //     .then(res => {
        //         this.setState({ tags: res.payload.tags })
        //     })
        // debugger
        this.setState({tags: this.props.tags})
    }

    componentDidUpdate(oldProps){
    //    debugger
        if (this.props.tags !== oldProps.tags){
            // this.props.fetchDeck(this.props.deck.id)
            //     .then(res => {
            //         this.setState({tags: res.payload.tags})
            //     })
            this.setState({ tags: this.props.tags })
            }
    }

    render(){
       
        let tags = this.state.tags;
        // debugger
        if (!tags) return null;
        let tagNames = Object.values(tags).map( tag => {
            return(
                <ul key={tag.id}>
                    {tag.name}
                    <br />
                </ul>

            )
        })
        return(
            <div className="tags">
                {tagNames}
            </div>
            
        )
    }
}

export default withRouter(TagList);