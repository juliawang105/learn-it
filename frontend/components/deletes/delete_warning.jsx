import React from 'react';

class DeleteWarning extends React.Component{
    constructor(props){
        super(props)

        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        document.addEventListener('keydown', this.escFunction)
    };

    componentWillUnmount() {
        document.removeEventListener("keydown", this.escFunction);
    }

    escFunction(e) {
        // e.preventDefault();
        if (e.keyCode === 27) {
            this.props.closeModal()
        };
    };

    handleDelete(){
        event.preventDefault();
        debugger
        if(Object.keys(this.props.cards).length === 0){
            this.props.deleteDeck(this.props.data)
                .then(() => {
                    this.props.closeModal()
                })     
        } else {
            this.props.deleteCard(this.props.data)
                .then(() => {
                    this.props.closeModal()
                }) 
        }
          
    }

    render(){
        // debugger
        return(
            <div className="delete">
                <div tabIndex="0" onKeyDown={this.escFunction}></div>
                Are you sure you want to delete this?
                 <div onClick={this.props.closeModal} className="close-x-login">×</div>
                <div className="double-check">
                    <button onClick={this.handleDelete}>Yes, Please Delete</button>
                    <button onClick={() => this.props.closeModal()}>No, Let's Keep It</button>
                </div>
                
            </div>
        )
        
    }
};

export default DeleteWarning