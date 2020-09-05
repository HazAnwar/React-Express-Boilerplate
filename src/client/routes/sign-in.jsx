import React, { Component } from 'react';
import { Button } from '../components/button';
import { Input } from '../components/input';
import { ButtonTypes } from '../constants/button-types';
import { InputTypes } from '../constants/input-types';

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Click the button below'
    };
    this.updateText = this.updateText.bind(this);
  }

  componentDidMount() {
    // do something
  }

  updateText(event) {
    console.log(`Have received ${event.target.value}`);
  }

  onSubmit() {
    console.log('SUBMIT/BUTTON IS WORKING');
  }

  render() {
    return (
      <div className="mt-5">
        <h4>{this.state.message}</h4>
        <Input
          type={InputTypes.NUMBER}
          text="Phone Number"
          onChange={this.updateText}
        />
        <Button
          type={ButtonTypes.PRIMARY}
          text="Submit"
          handleClick={this.onSubmit}
        />
      </div>
    );
  }
}
