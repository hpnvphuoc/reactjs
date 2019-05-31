import React, { Component } from 'react'
import {connect} from 'react-redux'
import Word from './Word';
import Form from './Form';
import Filter from './Filter';

 class List extends Component {
    render() {
        return (
           <div>
                {/* <Form/>
                <Filter/>
                {this.props.words.filter(word=>{
                    if(this.props.filtermode==="Show_Forgot"&& word.isMemorized===true) return true;
                    if(this.props.filtermode==="Show_Memorized"&& word.isMemorized===false) return true;
                    if(this.props.filtermode==="Show_All") return true;
                    return false;

                }).map(word=><Word word={word} key={word.id}/>)} */}
           </div>
        )
      }
    }
    export default connect(null,)(List)
 
    // function getWordItem co return ok đúng
    // nhưng

    // khi mà viết ()=>{ this.getWordItem(word)} thì nó hiểu là function không nhận vào gì cả thực thi phương thức this.getWordItem
    // khi mà viết ()=> this.getWordItem(word) thì cũng y vậy chứ gì anh tại vì nó chỉ có 1 câu lệnh nên mình bỏ dấu ngoặc {} được
    // với lại trong phương thức getWordItem em có return rồi thì {return } nữa thì nó return 2 lần hả anh

    // {this.getWordItem(word)} => function chứa this.getWordItem(word) không có return nên tra về undefined
    // ()=> this.getWordItem(word) =>  () == this.getWordItem(word) this.getWordItem(word) return gi` thì () tương tự
    // ở trên đó em có return ve roi ma 
