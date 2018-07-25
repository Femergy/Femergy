import React from 'react';
import './LinkedinShareBtn.scss';
import BorderlessBtn from '../borderless-btn/BorderlessBtn';

const inIcon = '/images/ic-linkedin.svg';

class LinkedinShareBtn extends React.Component {
  render() {
    return (
      <BorderlessBtn icon={inIcon} text="Share on Linkedin" classMod="social-share-style" />
    );
  }
}

export default LinkedinShareBtn;
