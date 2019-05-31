import React, { Component } from 'react'
import { connect } from 'react-redux';

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            txtEn:"",
            txtVn:""
        }
    }
    toggleForm(){
        this.props.dispatch({type:"TOGGLE_FORM"})
    }
    addWord(){
        this.props.dispatch({type:"ADD_WORD",en:this.state.txtEn,vn:this.state.txtVn})
    }
    render() {
        return (
            <div>
                {!this.props.shouldShowForm
                 ?
                 <div>
                  <button
                       onClick={()=>this.toggleForm()} 
                      className="btn btn-success"
                      style={{width : 200 , margin : 10 , borderRadius : 10 }}
                    
                      >
                          +
                  </button>
                </div>
                :
                <div className="form-group word-from" >
                  <input
                      placeholder="English"
                      className="form-control"
                      value={this.props.txtEn}
                      onChange={evt=>this.setState({txtEn:evt.target.value})}
                      />
                  <br />
                  <input
                      placeholder="Vietnamese"
                      className="form-control"
                      value={this.props.txtVn}
                      onChange={evt=>this.setState({txtVn:evt.target.value})}
                      />
                  <br />
                  <div className="btn-container">
                      <button className="btn btn-success"
                      onClick={()=>{this.addWord()
                      console.log(this.state.txtEn)
                    }}
                      >
                          Add word
                      </button>
                      <button
                          className="btn btn-danger"
                          onClick={()=>this.toggleForm()} 
                          >
                          Cancel
                      </button>
                  </div>
              </div>
                }
            </div>
        )
    }
}
const mapStatetoProps=function (state){
    return {shouldShowForm:state.shouldShowForm}
}
export default connect(mapStatetoProps)(Form);