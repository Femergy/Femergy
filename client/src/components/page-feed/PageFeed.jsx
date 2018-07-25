import React from 'react';
import PageFeedView from './PageFeedView';

class PageFeed extends React.Component {
  render() {
    return (
      <PageFeedView {...this.props} />
    );
  }
}

export default PageFeed;
