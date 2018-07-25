import React from 'react';
import { connect } from 'react-redux';
import ContentView from './HomePageContentView';

const mapStateToProps = state => (
  {
    user: state.rootReducer.user,
  }
);

class Content extends React.Component {
  render() {
    return (
      <ContentView {...this.props} />
    );
  }
}

export default connect(mapStateToProps)(Content);
