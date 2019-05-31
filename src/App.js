import React, {Component} from 'react';
import './App.css';
import List from './components/List';
import {Provider} from 'react-redux';
import {createStore} from 'redux';




//redux:
  //1 : Định nghĩa ra store =>
  // state :  giá trị state đưa vào store chính dữ liệu sẽ truyền qua components
  // action : 
      // + tín hiệu : type (Nhìn vào tín hiệu để thay đổi store)
      // + tham số truyền vào (action.tenthuoctinh) : giá trị này sẽ được nằm trong action
  // mặc đinh phải return về state

  //2 : Truyền store vào trong components (sử dụng Provider)
  // 3 : Kết nối với components thông connect
// 4 : Thay đổi store thông qua dispatch

const defaultState={
    words:[
        {id:"a1",en:"one",vn:"Mot",isMemorized:true},
        {id:"a2",en:"two",vn:"Hai",isMemorized:false},
        {id:"a3",en:"three",vn:"Ba",isMemorized:true}
    ],
    txtEn:"",
    txtVn:"",
    shouldShowForm: false,
    filtermode:"Show_All"
}

const store=createStore((state=defaultState,action)=>
  {
    if(action.type==="TOGGLE_FORM"){
        return {...state,shouldShowForm:!state.shouldShowForm}
    }
    if(action.type==="ADD_WORD"){
      const newword={
        id:Math.random(),
        en:action.en,
        vn:action.vn,
        isMemorized:false
      }
      const newords=state.words.concat(newword);
      return {...state,words:newords}
    }
    if(action.type==="TOGGLE_WORD"){
      const newwords=state.words.map(w=>{
        if(w.id===action.id) return {...w,isMemorized:!w.isMemorized}
        return w
      })
      return{...state,words:newwords}
    }
    if(action.type==="REMOVE_WORD"){
      const newwords=state.words.filter(w=>w.id!==action.id)
      return {...state,words:newwords}
    }
    if(action.type==="Set_Filter_Mode"){
      
      return {...state,filtermode:action.filtermode}
    }
    if(action.type==="REMOVE_WORD"){
      const newords=state.words.filer(word=>word.id!==action.id)
        return {...state,words:newords}
      
    }
    return state;
  }
)



class App extends Component {
    render(){
      return (
        <div>
        <Provider store={store}>
        <List/>
        </Provider> 
       
        </div>
      );
      }   
    }


export default App;
