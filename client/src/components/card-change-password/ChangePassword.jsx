import React from 'react';
import ChangePasswordView from './ChangePasswordView';

class ChangePassword extends React.Component {
  render() {
    return (
      <ChangePasswordView {...this.props} />
    );
  }
}

export default ChangePassword;
