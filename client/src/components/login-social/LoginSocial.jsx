import React from 'react';
import './LoginSocial.scss';

class LoginSocial extends React.Component {
  render() {
    return (
      <a className={`social-icon--wrapper ${this.props.className}`} href={this.props.href}>
        {this.props.children}
      </a>
    );
  }
}

export default LoginSocial;
