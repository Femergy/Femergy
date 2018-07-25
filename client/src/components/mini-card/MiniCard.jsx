import React from 'react';
import MiniCardView from './MiniCardView';

class MiniCard extends React.Component {
  render() {
    return (
      <MiniCardView {...this.props} />
    );
  }
}

export default MiniCard;
