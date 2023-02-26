import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import SearchBar from './components/seach_bar';
import Gif from './components/gif';
import GifList from './components/gif_list';
import Giphy from 'giphy-api'

const GIPHY_API_KEY = 'WJMDvOWVOBnPKa0lYNeedE2YaXGmJ6MI';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "kyXCwskcwR2JSq5gZP"
    };
    this.search = this.search.bind(this);
    this.selectGif = this.selectGif.bind(this);
  }

  search(query) {
    const giphEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=10`
    fetch(giphEndpoint).then(response => response.json()).then((data) => {
      const gifs = data.data.map(giph => giph.id)
      this.setState({
        gifs: gifs
      })
    })
  }

  selectGif(id) {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
