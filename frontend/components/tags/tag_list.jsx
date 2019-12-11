import React from "react";
import { withRouter } from 'react-router'

class TagList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            tags: this.props.tags,
            update: false 
        }
    }

    componentDidUpdate(oldProps){
       //debugger
        if (this.props.update !== oldProps.update){
            
        }
    }

    render(){
        // debugger
        // debugger
        let tags = this.props.tags;
        // debugger
        if (!tags) return null;
        let tagNames = tags.map( tag => {
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