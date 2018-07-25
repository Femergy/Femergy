import React from 'react';
import './FacebookShareBtn.scss';
import BorderlessBtn from '../borderless-btn/BorderlessBtn';

const fbIcon = '/images/ic-facebook.svg';

class FacebookShareBtn extends React.Component {
  render() {
    return (
      <BorderlessBtn icon={fbIcon} text="Share on Facebook" classMod="social-share-style" />
    );
  }
}

export default FacebookShareBtn;
