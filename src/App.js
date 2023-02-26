import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import SearchBar from './components/seach_bar';

class App extends Component {

  render() {
    return(
      <div className='main-container'>
        <div className="left-scene">
          <SearchBar search='Saisisez le mot clé de votre recherche' />
        </div>
        <div className="right-scene">
        </div>
      </div>
    )
  }


}

export default App;
