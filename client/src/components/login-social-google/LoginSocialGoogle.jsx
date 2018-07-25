import React from 'react';
import LoginSocial from '../login-social/LoginSocial';
import config from '../../../config.json';
import { constants } from '../../constants';
import Icon from '../icon/Icon';

class LoginSocialGoogle extends React.Component {
  render() {
    return (
      <LoginSocial href={constants.SERVER + config.api.googleLogin}>
        <Icon type="google" style={{ border: '1px solid #7297FF' }} />
      </LoginSocial>
    );
  }
}

export default LoginSocialGoogle;
