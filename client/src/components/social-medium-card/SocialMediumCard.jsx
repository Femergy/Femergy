import React from 'react';
import SocialCard from '../social-card/SocialCard';

class SocialMediumCard extends React.Component {
  onMediumClick = () => {
    window.open('https://medium.com/femergy');
  }

  render() {
    return (
      <SocialCard {...this.props} icon="medium" title="Medium" onClick={this.onMediumClick} />
    );
  }
}

export default SocialMediumCard;
