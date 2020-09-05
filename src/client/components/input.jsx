import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Input extends Component {
  render() {
    return (
      <input
        className="mt-4"
        placeholder={this.props.text}
        onChange={this.props.onChange}
      />
    );
  }
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string
};
