import React, {Component} from 'react';
//let React = require('react')
import logo from './logo.svg';
//import logo = require('/logo/svg')
//let Component = React.Component
import './App.css';

import Header from './Components/Header/Header.js';
//import Main from './Components/Header/Main.js';


class App extends Component {
  render(){
    return (
      <div className="App">
       <header className="App-header">
        
        <Header/>

      </header>
      <main>
      </main>
    </div>
  );
}
}

export default App;
