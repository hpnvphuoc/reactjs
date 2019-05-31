import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toggleForm } from './redux/actioncreators';

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            txtEn:"",
            txtVn:""
        }
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
                          onClick={()=>this.props.toggleForm()} 
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
export default connect(null,toggleForm)(Form);