import React, { Component } from 'react';
import Axios from 'axios';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Loading message, please wait'
    };
  }

  componentDidMount() {
    console.log('If you can see this, its working :)');

    Axios.get('/api/test')
      .then((result) => this.setState({ message: result.data }))
      .catch((error) => this.setState({ error }));
  }

  render() {
    return <div className="p-2">{this.state.message}</div>;
  }
}
