import { connect } from 'react-redux';
import React from 'react';

class HomeForm extends React.Component{
    constructor(props){
        super(props)
    };

    render(){
        return (
            <div className="homepage" >
                <div className="notes">
                   <h2>Personalized Notes</h2>
                    <br></br>
                   <h2>Effective Learning</h2>
                    <br></br>
                   <h2>Maximized Time</h2>
                </div>
        
                
            </div>
        )
    }
};

// const mSTP = state => ({
    
// });

// const mDTP = dispatch => ({

// });

export default connect(null,null)(HomeForm);

