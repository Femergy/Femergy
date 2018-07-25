import React from 'react';
import SocialCard from '../social-card/SocialCard';

class SocialTelegramCard extends React.Component {
  onTelegramClick = () => {
    window.open('https://t.me/joinchat/EjjBJFD6CA-femPd4bUI0w');
  }

  render() {
    return (
      <SocialCard {...this.props} icon="telegram" title="Telegram" onClick={this.onTelegramClick} />
    );
  }
}

export default SocialTelegramCard;
