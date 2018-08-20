import React from 'react';
import { connect } from 'react-redux';
import PageGroupsView from './PageGroupsView';

const mapStateToProps = state => (
  {
    isAuth: state.rootReducer.isAuthenticated,
  }
);

class PageGroups extends React.Component {
  render() {
    return (
      <PageGroupsView {...this.props} />
    );
  }
}

export default connect(mapStateToProps)(PageGroups);
