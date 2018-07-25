import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GeneralInfoView from './GeneralInfoView';
import validate from '../../helpers/validateHelper';
import { updateUser } from '../../actions/actions';
import Note from '../note/Note';
import requestHelper from '../../helpers/requestHelper';

const mapStateToProps = state => (
  {
    user: state.rootReducer.user,
    token: state.rootReducer.token,
    isVerified: state.rootReducer.isVerified,
  }
);

const mapDispatchToProps = dispatch => (
  {
    updateUser: user => dispatch(updateUser(user)),
  }
);

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNameValid: true,
      isUsernameValid: true,
      isEmailValid: true,
      isBioValid: true,
      isLocationValid: true,
      name: '',
      username: '',
      email: '',
      bio: '',
      location: '',
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeBio = this.onChangeBio.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onVerifyClick = this.onVerifyClick.bind(this);
  }

  static get propTypes() {
    return {
      user: PropTypes.object.isRequired,
      token: PropTypes.object.isRequired,
      updateUser: PropTypes.func.isRequired,
    };
  }

  onChangeName(e) { this.setState({ name: e.currentTarget.value }); }
  onChangeUsername(e) { this.setState({ username: e.currentTarget.value }); }
  onChangeEmail(e) { this.setState({ email: e.currentTarget.value }); }
  onChangeBio(e) { this.setState({ bio: e.currentTarget.value }); }
  onChangeLocation(e) { this.setState({ location: e.currentTarget.value }); }

  onVerifyClick(e) {
    e.preventDefault();
    requestHelper.verifyEmail();
  }

  onSubmit(e) {
    e.preventDefault(e);

    const sendRequest = () => {
      this.isValid = (this.state.isNameValid &&
        this.state.isUsernameValid &&
        this.state.isEmailValid &&
        this.state.isBioValid &&
        this.state.isLocationValid);

      if (this.isValid) {
        const body = {};
        if (this.state.name) { body.displayName = this.state.name; }
        if (this.state.email) { body.email = this.state.email; }
        if (this.state.username) { body.username = this.state.username; }
        if (this.state.bio) { body.bio = this.state.bio; }
        if (this.state.location) { body.location = this.state.location; }

        const onSuccess = (res) => {
          this.props.updateUser(res);
          this.setState({
            name: '',
            username: '',
            email: '',
            bio: '',
            location: '',
          });
        };

        requestHelper.updateUser(body, onSuccess);
      }
    };

    this.setState({
      isNameValid: this.state.name ? validate.name(this.state.name) : true,
      isUsernameValid: this.state.username ? validate.username(this.state.username) : true,
      isEmailValid: this.state.email ? validate.email(this.state.email) : true,
      isBioValid: this.state.bio ? validate.bio(this.state.bio) : true,
      isLocationValid: this.state.location ? validate.location(this.state.location) : true,
    }, sendRequest);
  }

  render() {
    return (
      <GeneralInfoView
        {...this.props}
        {...this.state}
        onChangeName={this.onChangeName}
        onChangeUsername={this.onChangeUsername}
        onChangeEmail={this.onChangeEmail}
        onChangeBio={this.onChangeBio}
        onChangeLocation={this.onChangeLocation}
        onVerifyClick={this.onVerifyClick}
        onSubmit={this.onSubmit}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralInfo);
