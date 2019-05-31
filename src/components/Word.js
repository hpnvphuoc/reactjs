import React , {Component} from 'react';
import {connect} from 'react-redux'

class Word extends Component{
    toggleWord(id){
        this.props.dispatch({type:"TOGGLE_WORD",id:id})
    }
    removeword(id){
        this.props.dispatch({type:"REMOVE_WORD",id:id})
    }
    render(){
        const word=this.props.word;
        return(
            <div className="word">
                <div className="word-container">
                    <h3 className="text-success">{word.en}</h3>
                    <h3 className="text-danger">
                        {word.isMemorized ? '----' : word.vn}
                    </h3>
            </div>
            <div className="btn-container">
            <button
            //neu w.id !==word.id ma khong lam gi ca thi tao ra mot object moi co thuoc tinh word la mang co 1
            //phan tu phuong thuc render chay lai thi tai sao lai khong truy cap duoc vao thuoc tinh word.en
    
            //giai thich tai vi khi phuong thuc khong tra ve gia ca thi mac dinh tra ve undefined
            //nen khi truy cap vao thuoc tinh en cua undefine thi se bi loi
    
    
                className={word.isMemorized ? 'btn btn-success' : 'btn btn-danger'}
                onClick={()=>this.toggleWord(word.id)}
    
                //tại sao onClick ={this.toggleWord(word.id)} không được mà  onClick={()=>this.toggleWord(word.id)}
                >
                {word.isMemorized ? 'Forgot' : 'Memorized'}
            </button>
            <button 
                className="btn btn-warning"
                onClick={()=>{this.removeword(word.id)} }
                >
                Remove
            </button>
            </div> 
            </div>
            )      
        }
    }

    const mapStatetoProps=function(state){
        return {words:state.words}
    }
    export default connect(mapStatetoProps)(Word);