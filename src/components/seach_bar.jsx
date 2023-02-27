import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        placeholder="👉🏻 Trouver votre gif en saisissant le mot clé ici"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
