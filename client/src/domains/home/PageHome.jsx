import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PageHomeView from './PageHomeView';
import { setBonuses } from '../../actions/actions'
import requestHelper from '../../helpers/requestHelper';
import './home.scss'

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    setBonuses
  }, dispatch)
});

const mapStateToProps = state => (
  {
    userId: state.rootReducer.user.id,
  }
);

class PageHome extends React.Component {
  componentDidMount() {
    const { userId, actions } = this.props;
    requestHelper.getBonuses({ userId }, actions.setBonuses);
  }
  render() {
    return (
      <PageHomeView {...this.props} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageHome);
