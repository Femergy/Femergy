import React from 'react';
import InviteFriendsView from './InviteFriendsView';

class InviteFriends extends React.Component {
  render() {
    return (
      <InviteFriendsView {...this.props} />
    );
  }
}

export default InviteFriends;
