import React, { Component } from 'react'

export default class List extends Component {
    constructor(props){
        super(props);
        this.state={
            word:[
                {id:"a1",en:"one",vn:"Mot",isMemorized:true},
                {id:"a2",en:"two",vn:"Hai",isMemorized:false},
                {id:"a3",en:"three",vn:"Ba",isMemorized:true}
            ]
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.word.map(word=><div className="word">
                    <div className="word-container">
                    <h3 className="text-success">{word.en}</h3>
                    <h3 className="text-danger">
                        {word.isMemorized ? '----' : word.vn}
                    </h3>
                    </div>
                    <div className="btn-container">
                    <button
                        className={word.isMemorized ? 'btn btn-success' : 'btn btn-danger'}
                        onClick={()=>{
                            const newWord=this.state.word.map(w=>{
                                if(w.id===word.id){
                                    return {...w, isMemorized:!w.isMemorized}
                                }else{
                                    return w;
                                }
                            } )
                            this.setState({word:newWord});
                        }}
                        >
                        {word.isMemorized ? 'Forgot' : 'Memorized'}
                    </button>
                    <button 
                        className="btn btn-warning" >
                        Remove
                    </button>
                    </div>
                    </div>)
                }
            </div>
        )
    }
}
