import React from 'react';
import ContentView from './PageContentEarnView';

class Content extends React.Component {
  render() {
    return (
      <ContentView {...this.props} />
    );
  }
}

export default Content;
