import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AuthFormView from './AuthFormView';
import { toSignin, toSignup, notValidAuthForm, okState, forgotPassword, remindSent, login, isValidPasswords } from '../../actions/actions';
import { constants } from '../../constants';
import requestHelper from '../../helpers/requestHelper';

const mapStateToProps = state => (
  {
    isAuth: state.rootReducer.isAuthenticated,
    stage: state.rootReducer.page.stage,
    pageState: state.rootReducer.pageState,
    user: state.rootReducer.user,
    referer: state.rootReducer.referer,
  }
);

const mapDispatchToProps = dispatch => (
  {
    toSignin: () => dispatch(toSignin()),
    toSignup: () => dispatch(toSignup()),
    notValidAuthForm: () => dispatch(notValidAuthForm()),
    isValidPasswords: (payload) => dispatch(isValidPasswords(payload)),
    okState: () => dispatch(okState()),
    forgotPassword: () => dispatch(forgotPassword()),
    remindSent: () => dispatch(remindSent()),
    login: data => dispatch(login(data)),
  }
);

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputs = {};
    this.submitBtn = null;
    this.onChangeFormType = this.onChangeFormType.bind(this);
    this.inputRef = this.inputRef.bind(this);
    this.btnRef = this.btnRef.bind(this);
    this.onForgotPassword = this.onForgotPassword.bind(this);
    this.onRemindSent = this.onRemindSent.bind(this);
    this.onEnterPress = this.onEnterPress.bind(this);
  }

  static get propTypes() {
    return {
      type: PropTypes.oneOf(['signin', 'signup']),
      stage: PropTypes.string.isRequired,
      pageState: PropTypes.string.isRequired,
      okState: PropTypes.func.isRequired,
      notValidAuthForm: PropTypes.func.isRequired,
      toSignup: PropTypes.func.isRequired,
      toSignin: PropTypes.func.isRequired,
      forgotPassword: PropTypes.func.isRequired,
      remindSent: PropTypes.func.isRequired,
      setUser: PropTypes.func.isRequired,
      referer: PropTypes.string,
      user: PropTypes.object,
      login: PropTypes.func.isRequired,
      isAuth: PropTypes.bool,
    };
  }

  static get defaultProps() {
    return {
      type: 'signin',
      user: null,
      referer: null,
      isAuth: false,
    };
  }

  onEnterPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.submitBtn.click();
    }
  }

  onForgotPassword(e) {
    e.preventDefault();
    this.props.forgotPassword();
  }

  onChangeFormType(e) {
    e.preventDefault();
    this.inputs = {};
    if (this.props.stage === constants.SIGN_IN) {
      this.props.toSignup();
    } else if (this.props.stage === constants.SIGN_UP) {
      this.props.toSignin();
    } else if (this.props.stage === constants.FORGOT_PASSWORD) {
      this.props.toSignin();
    } else {
      this.props.toSignin();
    }
  }

  onRemindSent(e) {
    e.preventDefault();
    const reqBody = { email: this.inputs.email.value };
    requestHelper.forgotPassword(reqBody, this.props.remindSent);
  }

  onSignup = (e) => {
    e.preventDefault();
    const reqBody = {
      displayName: this.inputs.name.value,
      email: this.inputs.email.value,
      password: this.inputs.password.value,
      referer: this.props.referer,
    };
    if (this.inputs.password.value === this.inputs.confirmPassword.value) {
      requestHelper.signup(reqBody, this.props.login);
      this.props.isValidPasswords(true);
    } else {
      this.props.isValidPasswords(false);
    }
  }

  onSigninForm = (e) => {
    e.preventDefault();
    const reqBody = {
      email: this.inputs.email.value,
      password: this.inputs.password.value,
    };
    requestHelper.signin(reqBody, this.props.login);
  }

  checkFormValid(inputs) {
    try {
      if (this.props.stage === constants.SIGN_IN) {
        if (inputs.password && !(inputs.email.isValid && inputs.password.isValid)) {
          this.props.notValidAuthForm();
          return -1;
        }
      } else if (this.props.stage === constants.SIGN_UP) {
        if (inputs.password && !(inputs.email.isValid && inputs.password.isValid
        && inputs.name.isValid )) {
          this.props.notValidAuthForm();
          return -1;
        }
      } else if (this.props.stage === constants.FORGOT_PASSWORD) {
        if (!inputs.email.isValid) {
          this.props.notValidAuthForm();
          return -1;
        }
      }
    } catch (err) {
      this.props.notValidAuthForm();
      return -1;
    }

    this.props.okState();
    return 0;
  }

  inputRef(inputObject) {
    this.inputs[inputObject.type] = {
      value: inputObject.value,
      isValid: inputObject.isValid,
    };
    this.checkFormValid(this.inputs);
  }

  btnRef(btn) {
    this.submitBtn = btn;
  }

  render() {
    return (
      <AuthFormView
        {...this.props}
        type={this.props.stage}
        onChangeFormType={this.onChangeFormType}
        onSigninForm={this.onSigninForm}
        onSignup={this.onSignup}
        inputRef={this.inputRef}
        onEnterPress={this.onEnterPress}
        btnRef={this.btnRef}
        isValid={this.props.pageState === constants.OK_STATE}
        onForgot={this.onForgotPassword}
        onForgotSend={this.onRemindSent}
        user={this.props.user}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
