import React from 'react';
import ContentView from './ToolsPageContentView';
import ToolsList from './ToolsList';

class Content extends React.Component {
  render() {
    return (
      <ContentView {...this.props} tools={ToolsList} />
    );
  }
}

export default Content;
