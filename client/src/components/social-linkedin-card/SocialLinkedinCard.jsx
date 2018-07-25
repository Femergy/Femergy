import React from 'react';
import SocialCard from '../social-card/SocialCard';

class SocialLinkedinCard extends React.Component {
  onLinkedinClick = () => {
    window.open('https://www.linkedin.com/company/femergy-fem/');
  }

  render() {
    return (
      <SocialCard {...this.props} icon="linkedin" title="Linkedin" onClick={this.onLinkedinClick} />
    );
  }
}

export default SocialLinkedinCard;
