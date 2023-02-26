import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.search}</h2>
        <input type="text" />
      </div>
    )
  }
}

export default SearchBar;
