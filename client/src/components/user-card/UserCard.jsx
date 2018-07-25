import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserCardView from './UserCardView';
import { updateUser } from '../../actions/actions';
import Note from '../note/Note';
import requestHelper from '../../helpers/requestHelper';

const mapStateToProps = state => (
  {
    isVerified: state.rootReducer.isVerified,
    token: state.rootReducer.token,
    user: state.rootReducer.user,
  }
);

const mapDispatchToProps = dispatch => (
  {
    updateUser: user => dispatch(updateUser(user)),
  }
);

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.onPhotoUpload = this.onPhotoUpload.bind(this);
    this.onVerifyClick = this.onVerifyClick.bind(this);
  }

  static get propTypes() {
    return {
      token: PropTypes.object.isRequired,
      isVerified: PropTypes.bool,
      isProfile: PropTypes.bool,
    };
  }

  static get defaultProps() {
    return {
      isVerified: false,
      isProfile: false,
    };
  }

  onPhotoUpload(e) {
    const reqBody = { photo: e.target.files[0] };
    requestHelper.updatePhoto(reqBody, this.props.updateUser);
  }

  onVerifyClick(e) {
    e.preventDefault();
    requestHelper.verifyEmail();
  }

  render() {
    return (
      <UserCardView
        {...this.props}
        connects={0}
        followers={0}
        onPhotoUpload={this.onPhotoUpload}
        onVerifyClick={this.onVerifyClick}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
