import React from 'react';
import config from '../../../config.json';
import { constants } from '../../constants';
import LoginSocial from '../login-social/LoginSocial';
import Icon from '../icon/Icon';

class LoginSocialFacebook extends React.Component {
  render() {
    return (
      <LoginSocial href={constants.SERVER + config.api.facebookLogin}>
        <Icon type="facebook" />
      </LoginSocial>
    );
  }
}

export default LoginSocialFacebook;
