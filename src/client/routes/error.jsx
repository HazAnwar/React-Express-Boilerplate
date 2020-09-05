import React, { Component } from 'react';

export class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Click on the button'
    };
  }

  componentDidMount() {
    // do something
  }

  render() {
    return <div>Hi, it looks like you are lost :(</div>;
  }
}
