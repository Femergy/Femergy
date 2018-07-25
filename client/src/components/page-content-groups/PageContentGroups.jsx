import React from 'react';
import ContentView from './PageContentGroupsView';

class Content extends React.Component {
  render() {
    return (
      <ContentView {...this.props} />
    );
  }
}

export default Content;
