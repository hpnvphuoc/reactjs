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
    toggleWord(id){
        const newWord=this.state.word.map(w=>{
            if(id===w.id){
                return {...w, isMemorized:!w.isMemorized}
            }else {
                return w;
            }
        } )
        this.setState({word:newWord});
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
