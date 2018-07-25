import React from 'react';
import { connect } from 'react-redux';
import './PersonalPage.scss';
import PersonalHeader from '../personal-header/PersonalHeader';
import appHelper from '../../helpers/appHelper';
import { setAsReferal } from '../../actions/actions';

const mapStateToProps = state => (
  {
    isAuth: state.rootReducer.isAuthenticated,
    user: state.rootReducer.user,
    referer: state.rootReducer.referer,
  }
);

const mapDispatchToProps = dispatch => (
  {
    setAsReferal: (referer, referal) => dispatch(setAsReferal(referer, referal)),
  }
);

class PersonalPage extends React.Component {
  componentDidMount() {
    if (this.props.user.isNewUser && this.props.referer) {
      this.props.setAsReferal(this.props.referer, this.props.user.id);
    }
    appHelper.pageToTop();
  }

  render() {
    return (
      <React.Fragment>
        <PersonalHeader />
        <div className="page-front">
          <div className="page-front__content">
            {this.props.children}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalPage);

