import React, {Component} from 'react';
//let React = require('react')
import logo from './logo.svg';
//import logo = require('/logo/svg')
//let Component = React.Component
import './App.css';

import Header from './Components/Header/Header.jsx';
import Main from './Components/Main/Main.jsx';


class App extends Component {
  render(){
    return (
      <div className="App">
       <header className="App-header">
        
        <Header/>

      </header>
      <main>
        <Main/>
      </main>
    </div>
  );
}
}

export default App;
