import React from 'react';
import MyGroupsView from './MyGroupsView';
import testList from './testList';

class MyGroups extends React.Component {
  render() {
    return (
      <MyGroupsView {...this.props} items={testList} />
    );
  }
}

export default MyGroups;
