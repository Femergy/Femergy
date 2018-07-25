import React from 'react';
import PeopleYouMayKnowView from './PeopleYouMayKnowView';
import testList from './testList';

class PeopleYouMayKnow extends React.Component {
  render() {
    return (
      <PeopleYouMayKnowView {...this.props} items={testList} />
    );
  }
}

export default PeopleYouMayKnow;
