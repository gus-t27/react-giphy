import React, { Component } from 'react';

// class Gif extends Component {
//   render() {
//     const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
//     return (
//       <img src={src} alt="gif" className="gif"/>
//     );
//   }
// }

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const { id } = this.props;
    if (!id) {
      return null;
    }

    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
