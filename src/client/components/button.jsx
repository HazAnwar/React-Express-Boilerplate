import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {
  render() {
    return (
      <button
        className={`mt-3 ${this.props.type}`}
        onClick={this.props.handleClick}
      >
        {this.props.text}
      </button>
    );
  }
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  type: PropTypes.string.isRequired
};
