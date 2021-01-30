import React, { Component } from 'react';
import '../styles/loader.css';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class='loader-wrapper'>
        <span class='loader'>
          <span class='loader-inner'></span>
        </span>
      </div>
    );
  }
}

export default Loader;
