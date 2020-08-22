import React, { Component } from 'react';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Click on the button'
    };
    this.updateText = this.updateText.bind(this);
  }

  componentDidMount() {
    // do something
  }

  updateText() {
    const thisContext = this;
    this.setState({ message: 'Thanks for clicking the button' });
    setTimeout(function () {
      thisContext.setState({ message: 'Click on the button' });
    }, 3000);
  }

  render() {
    return (
      <div className="mt-5">
        <h4>{this.state.message}</h4>
        <button className="mt-4" onClick={this.updateText}>
          CLICK ME
        </button>
      </div>
    );
  }
}
