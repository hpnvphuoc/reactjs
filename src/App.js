import React, {Component} from 'react';
import './App.css';
import Word from './components/Word';
import Loop from './components/Loop';
import List from './components/List';

class App extends Component {
    render(){
      return (
        <div className="App">
          {/* <Word/> */}
         {/* <Loop/> */}
         <List/>
      </div>
      );
      }   
    }


export default App;
