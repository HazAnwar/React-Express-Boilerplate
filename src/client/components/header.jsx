import React, { Component } from 'react';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Name goes here'
    };
  }

  componentDidMount() {
    // do something
  }

  render() {
    return <div className="header">{this.state.title}</div>;
  }
}
