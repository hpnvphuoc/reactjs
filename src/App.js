import React, {Component} from 'react';
import './App.css';
import List from './components/List';
import {Provider} from 'react-redux';
import store from './components/redux/store';




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
