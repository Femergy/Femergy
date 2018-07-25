import React from 'react';
import SharePersonalLinkView from './SharePersonalLinkView';

class SharePersonalLink extends React.Component {
  render() {
    return (
      <SharePersonalLinkView {...this.props} />
    );
  }
}

export default SharePersonalLink;
