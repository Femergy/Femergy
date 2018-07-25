import React from 'react';
import PropTypes from 'prop-types';
import './FileInput.scss';

class FileInput extends React.Component {
  static get propTypes() {
    return {
      name: PropTypes.string,
      text: PropTypes.string,
      accept: PropTypes.string,
      className: PropTypes.string,
      onChange: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      name: 'file-input',
      text: 'Browse',
      accept: '*',
      className: '',
      onChange: e => console.log(e.target.files),
    };
  }

  render() {
    return (
      <label htmlFor={this.props.name} className={`file-input ${this.props.className}`}>
        {this.props.text}
        <input name={this.props.name} type="file" accept={this.props.accept} onChange={this.props.onChange} />
      </label>
    );
  }
}

export default FileInput;
