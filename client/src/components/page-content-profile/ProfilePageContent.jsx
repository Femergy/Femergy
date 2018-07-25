import React from 'react';
import ProfilePageContentView from './ProfilePageContentView';

class ProfilePageContent extends React.Component {
  render() {
    return (
      <ProfilePageContentView {...this.props} />
    );
  }
}

export default ProfilePageContent;
