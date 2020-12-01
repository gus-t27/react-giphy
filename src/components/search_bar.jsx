import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  handleUpdate = (event) => {
    this.setState({
      term: event.target.value
    });
    this.props.searchFunction(event.target.value);
  }

  componentWillMount() {
    console.log("SEARCH_BAR WILL MOUNT");
    setInterval;
  }

  componentDidMount() {
    console.log("SEARCH_BAR DID MOUNT");
  }

  // handleUpdate = (event) => {
  //   this.props.searchFunction(event.target.value);
  // }

  componentWillUnmount() {
    clearInterval;
  }

  render() {
    console.log("SEARCH_BAR RENDER");
    return (
      <input
        value={this.state.term}
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
