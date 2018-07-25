import React from 'react';
import YouMayBeInterestedView from './YouMayBeInterestedView';
import testList from './testList';

class YouMayBeInterested extends React.Component {
  render() {
    return (
      <YouMayBeInterestedView {...this.props} items={testList} />
    );
  }
}

export default YouMayBeInterested;
