import React, { Component } from 'react'

export class Gif extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    // const url = `https://media1.giphy.com/${}`;
    return (
      <div className="gif-selected">
        <img src={this.props.id} />
      </div>
    )
  }
}

export default Gif;
