import React from 'react';
import PropTypes from 'prop-types';

import AuthFormInputView from './AuthFormInputView';

class AuthFormInput extends React.Component {
  static validateEmail(email) {
    const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return emailPattern.test(email);
  }


  static validateText(text) {
    const textPattern = /([A-Za-z-]+) ([A-Za-z-]+)/;
    return textPattern.test(text);
  }

  constructor(props) {
    super(props);
    this.constType = props.type;
    this.state = {
      type: props.type,
      isValid: true,
    };
    this.onEyeClick = this.onEyeClick.bind(this);
    this.inputRef = this.inputRef.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  static get propTypes() {
    return {
      type: PropTypes.string,
      placeholder: PropTypes.string,
      inputRef: PropTypes.func.isRequired,
      field: PropTypes.string.isRequired,
    };
  }

  static get defaultProps() {
    return {
      type: 'text',
      placeholder: 'default',
    };
  }

  componentDidMount() {
    this.props.inputRef({
      type: this.props.field,
      isValid: this.state.isValid,
      value: this.input.value,
    });
  }


  onEyeClick(e) {
    e.preventDefault();
    const newType = this.state.type === 'password' ? 'text' : 'password';
    this.setState({
      type: newType,
    });
  }

  onBlur = () => {
    switch (this.constType) {
      case 'email':
        this.setState({
          isValid: AuthFormInput.validateEmail(this.input.value),
        }, () => {
          this.props.inputRef({
            type: this.props.field,
            isValid: this.state.isValid,
            value: this.input.value,
          });
        });
        break;
      case 'password':
        this.setState({
          isValid: !!this.input.value,
        }, () => {
          this.props.inputRef({
            type: this.props.field,
            isValid: this.state.isValid,
            value: this.input.value,
          });
        });
        break;
      case 'text':
        this.setState({
          isValid: AuthFormInput.validateText(this.input.value),
        }, () => {
          this.props.inputRef({
            type: this.props.field,
            isValid: this.state.isValid,
            value: this.input.value,
          });
        });
        break;
      default:
        break;
    }
  }

  onChange() {
    this.props.inputRef({
      type: this.props.field,
      isValid: this.state.isValid,
      value: this.input.value,
    });
  }

  inputRef(el) {
    this.input = el;
  }

  render() {
    return (
      <AuthFormInputView
        {...this.props}
        type={this.state.type}
        onEyeClick={this.onEyeClick}
        constType={this.constType}
        inputRef={this.inputRef}
        inputAuthRef={this.props.inputRef}
        onBlur={this.onBlur}
        onChange={this.onChange}
        isValid={this.state.isValid}
      />
    );
  }
}

export default AuthFormInput;
