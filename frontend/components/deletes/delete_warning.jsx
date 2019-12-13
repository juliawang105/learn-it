import React from 'react';

class DeleteWarning extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        <div className="delete">
            Are you sure you want to delete?
        </div>
    }
};

export default DeleteWarning