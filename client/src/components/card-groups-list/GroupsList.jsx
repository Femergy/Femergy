import React from 'react';
import GroupsListView from './GroupsListView';
import testList from './testList';

class GroupsList extends React.Component {
  render() {
    return (
      <GroupsListView {...this.props} groups={testList} />
    );
  }
}

export default GroupsList;
