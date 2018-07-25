import React from 'react';
import SocialCard from '../social-card/SocialCard';

class SocialFacebookCard extends React.Component {
  onFacebookClick = () => {
    window.open('https://www.femergy.com/');
  }

  render() {
    return (
      <SocialCard {...this.props} icon="facebook" title="Facebook" onClick={this.onFacebookClick} />
    );
  }
}

export default SocialFacebookCard;
