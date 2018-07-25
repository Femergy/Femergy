import React from 'react';
import SocialCard from '../social-card/SocialCard';

class SocialTwitterCard extends React.Component {
  onTwitterClick = () => {
    window.open('https://twitter.com/@femergy_com');
  }

  render() {
    return (
      <SocialCard {...this.props} icon="twitter" title="Twitter" onClick={this.onTwitterClick} />
    );
  }
}

export default SocialTwitterCard;
