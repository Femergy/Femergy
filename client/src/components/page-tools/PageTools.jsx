import React from 'react';
import { connect } from 'react-redux';
import PageToolsView from './PageToolsView';

const mapStateToProps = state => (
  {
    isAuth: state.rootReducer.isAuthenticated,
  }
);

class PageTools extends React.Component {
  render() {
    return (
      <PageToolsView {...this.props} />
    );
  }
}

export default connect(mapStateToProps)(PageTools);
