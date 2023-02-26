import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import SearchBar from './components/seach_bar';
import Gif from './components/gif';

class App extends Component {

  render() {
    return(
      <div className='main-container'>
        <div className="left-scene">
          <SearchBar search='Saisisez le mot clé de votre recherche' />
          <Gif id='https://media4.giphy.com/media/Jt5GkWXoLswrgP2Aws/200.webp?cid=bb5a1c3accfr5eanrte86yv1xeihsh2yziosjo49q34uhzn6&rid=200.webp&ct=g' />
        </div>
        <div className="right-scene">
        </div>
      </div>
    )
  }


}

export default App;
