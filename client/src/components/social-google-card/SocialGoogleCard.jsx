import React from 'react';
import SocialCard from '../social-card/SocialCard';

class SocialGoogleCard extends React.Component {
  onGoogleClick = () => {
    window.open('https://www.femergy.com/');
  }

  render() {
    return (
      <SocialCard {...this.props} icon="google+" title="Google" onClick={this.onGoogleClick} />
    );
  }
}

export default SocialGoogleCard;
