import React from 'react';
import LoginSocial from '../login-social/LoginSocial';
import config from '../../../config.json';
import { constants } from '../../constants';
import Icon from '../icon/Icon';

class LoginSocialTwitter extends React.Component {
  render() {
    return (
      <LoginSocial href={constants.SERVER + config.api.twitterLogin}>
        <Icon type="twitter" />
      </LoginSocial>
    );
  }
}

export default LoginSocialTwitter;
