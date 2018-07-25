import React from 'react';
import PropTypes from 'prop-types';
import './FormField.scss';

class FormField extends React.Component {
  static get propTypes() {
    return {
      title: PropTypes.string,
      type: PropTypes.oneOf(['text', 'password', 'email']),
      placeholder: PropTypes.string,
      isDate: PropTypes.bool,
      className: PropTypes.string,
      onChange: PropTypes.func,
      isValid: PropTypes.bool,
      value: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      title: '',
      type: 'text',
      placeholder: 'default',
      isDate: false,
      className: '',
      onChange: () => {},
      isValid: true,
      value: '',
    };
  }

  render() {
    let inputClassName = '';
    inputClassName += this.props.isDate ? 'form-field__date-input' : 'form-field__input';
    inputClassName += this.props.isValid ? '' : ' form-field__not-valid';


    return (
      <label className={`form-field ${this.props.className}`}>
        { this.props.title && <p>{this.props.title}</p> }
        <input
          type={this.props.type}
          value={this.props.value}
          className={inputClassName}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        />
      </label>
    );
  }
}

export default FormField;
