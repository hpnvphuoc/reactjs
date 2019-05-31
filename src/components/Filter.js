import React, { Component } from 'react'
import { connect } from 'react-redux';

class Filter extends Component {
    render() {
        return (
        <div>
             <select  
                className="word"
                value={this.props.filtermode}
                onChange={(evt)=>{this.props.dispatch({type:"Set_Filter_Mode", filtermode:evt.target.value})}}
                >
                     <option value="Show_All">Show_All</option>
                     <option value="Show_Forgot">Show_Forgot</option>
                     <option value="Show_Memorized">Show_Memorized</option>
                </select> 
        </div>
        )
    }
}
const mapStatetoprops=function(state){
    return{filtermode:state.filtermode}
}

export default connect(mapStatetoprops)(Filter)
