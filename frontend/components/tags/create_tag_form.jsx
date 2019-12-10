import React from 'react'; 

class TagForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: ""
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
        this.props.createTag(tag);
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

export default TagForm; 