import React from "react";
import { withRouter } from 'react-router'

class TagList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            tags: this.props.tags,
            update: false 
        }
        // this.fetchDeck = this.props.fetchDeck.bind(this);
    }
    // componentDidMount(){
    //     // this.props.fetchDeck(this.props.match.params.deckId)
    //     //     .then(res => {
    //     //         //debugger
    //     //         this.setState({ tags: res.payload.tags })

    //     //     });
    //     // // debugger
    //     this.setState({tags: this.state.tags})
    // }

    componentDidUpdate(oldProps){
    //    debugger
    //     if (Object.keys(this.props.tags).length !== Object.keys(oldProps.tags).length){
    //         this.props.fetchDeck(this.props.match.params.deckId)
    //             .then(res => {
    //                 //debugger
    //                 this.setState({ tags: res.payload.tags })

    //             });
    // //        this.setState({ tags: this.props.tags })
    //         }
    }

    render(){
       
        let tags = this.state.tags;
        // debugger
        if (!tags) return null;
        // debugger
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