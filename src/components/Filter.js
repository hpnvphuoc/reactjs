import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setFilterMode } from './redux/actioncreators';

class Filter extends Component {
    render() {
        return (
        <div>
             <select  
                className="word"
                value={this.props.filtermode}
                onChange={(evt)=>{this.props.filtermode()}}
                >
                     <option value="Show_All">Show_All</option>
                     <option value="Show_Forgot">Show_Forgot</option>
                     <option value="Show_Memorized">Show_Memorized</option>
                </select> 
        </div>
        )
    }
}
export default connect(null,setFilterMode)(Filter)
