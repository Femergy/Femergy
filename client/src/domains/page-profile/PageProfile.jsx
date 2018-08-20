import React from 'react';
import { connect } from 'react-redux';
import PageProfileView from './PageProfileView';

const mapStateToProps = state => (
  {
    isAuth: state.rootReducer.isAuthenticated,
  }
);

class PageProfile extends React.Component {
  render() {
    return (
      <PageProfileView {...this.props} />
    );
  }
}

export default connect(mapStateToProps)(PageProfile);
