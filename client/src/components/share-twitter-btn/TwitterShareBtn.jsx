import React from 'react';
import BorderlessBtn from '../borderless-btn/BorderlessBtn';
import './TwitterShareBtn.scss';

const twIcon = '/images/ic-twitter.svg';

class TwitterShareBtn extends React.Component {
  render() {
    return (
      <BorderlessBtn icon={twIcon} text="Share on Twitter" classMod="social-share-style" />
    );
  }
}

export default TwitterShareBtn;
