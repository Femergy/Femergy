import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames  from 'classnames';

import LoginSocialFacebook from '../login-social-facebook/LoginSocialFacebook';
import LoginSocialGoogle from '../login-social-google/LoginSocialGoogle';
import LoginSocialLinkedin from '../login-social-linkedin/LoginSocialLinkedin';
import LoginSocialTwitter from '../login-social-twitter/LoginSocialTwitter';
import './AuthForm.scss';
import AuthFormInput from './auth-form-input/AuthFormInput';
import RoundedBtn from '../rounded-btn/RoundedBtn';
import { constants } from '../../constants';

import Logo from '../logo/Logo';

const hideEmail = (email) => {
  const endingPattern = /@.+/;
  const ending = endingPattern.exec(email);
  const hiddenEmail = `${email.slice(0, 2)}*****${ending}`;
  return hiddenEmail;
};

class AuthFormView extends React.Component {
  render() {
    let title = null;
    let body = null;
    let hiddenEmail = null;
    if (this.props.user) hiddenEmail = hideEmail(this.props.user.email);


    if (this.props.type === constants.SIGN_IN || this.props.type === constants.SIGN_UP) {
      title = (
        <div>
          <Logo type="color" big/>
        </div>
      );
    } else if (this.props.type === constants.FORGOT_PASSWORD) {
      title = (
        <div>
          <h1 className="auth-form__title">Forgot Password</h1>
          <p className="auth-form__forgot-pre-title">Enter your email and we’ll send you password reset
            instructions.</p>
        </div>
      );
    } else if (this.props.type === constants.REMIND_SENT) {
      title = (
        <div>
          <h1 className="auth-form__title">Success!</h1>
          <p className="auth-form__forgot-pre-title">We’ve sent the recovery instructions to entered email</p>
        </div>
      );
    }
    if (this.props.type === constants.SIGN_IN) {
      body = (
        <div>
          <form className="auth-form">
            <AuthFormInput type="email" placeholder="Username" key="si1" inputRef={this.props.inputRef}
                           onEnterPress={this.props.onEnterPress} onInputChanged={this.props.onInputChanged} field="email"
                           autofocus/>
            <AuthFormInput type="password" placeholder="Password" key="si2" inputRef={this.props.inputRef}
                           onEnterPress={this.props.onEnterPress} onInputChanged={this.props.onInputChanged} field="password"/>
            <p className="auth-form__forgot">
              <button style={{display: 'inline'}} className="auth-form__forgot--link" onClick={this.props.onForgot}>Forgot
                password?
              </button>
            </p>
            <div className="auth-form__btn--wrapper">
              <RoundedBtn text="Sign in" btnRef={this.props.btnRef} disabled={!this.props.isValid} onClick={this.props.onSigninForm}/>
              <p>
                {"Don't have an account? "}
                <button className="auth-form__to-signup" onClick={this.props.onChangeFormType}
                        style={{display: 'inline'}}>Sign up
                </button>
              </p>
            </div>
          </form>
          <div className="auth-form__social--wrapper">
            <h2 className="auth-form__social-title">
              Sign in with
            </h2>
            <div className="auth-form__social-list">
              <LoginSocialGoogle/>
              {/* <LoginSocialFacebook /> */}
              <LoginSocialLinkedin/>
              <LoginSocialTwitter/>
            </div>
          </div>
        </div>
      );
    } else if (this.props.type === constants.SIGN_UP) {

      body = (
        <div>
          <form className="auth-form" style={{borderBottom: 'none'}}>
            <AuthFormInput type="text" placeholder="Full Name" key="su1" inputRef={this.props.inputRef}
                           onEnterPress={this.props.onEnterPress} onInputChanged={this.props.onInputChanged} field="name"/>
            <AuthFormInput type="email" placeholder="Email" key="su2" inputRef={this.props.inputRef}
                           onEnterPress={this.props.onEnterPress} onInputChanged={this.props.onInputChanged} field="email"/>
            <AuthFormInput type="password" placeholder="Password" key="su3" inputRef={this.props.inputRef}
                           onEnterPress={this.props.onEnterPress} onInputChanged={this.props.onInputChanged} field="password"/>
            <AuthFormInput type="password" placeholder="Confirm Password" key="su4" inputRef={this.props.inputRef}
                           onEnterPress={this.props.onEnterPress} onInputChanged={this.props.onInputChanged}
                           field="confirmPassword"/>
            {/*{ !this.props.isValidPasswords &&*/}
              <div className={classNames('auth-form__input--wrapper', {"hidden": this.props.isValidPasswords})}>
                <p className={'auth-form__not-valid'}>Passwords must match</p>
              </div>
            {/*}*/}

            <div className="auth-form__btn--wrapper">
              <RoundedBtn text="Sign up" btnRef={this.props.btnRef} disabled={!this.props.isValid} onClick={this.props.onSignup}/>
              <p>
                Already have an account? <button className="auth-form__to-signup" onClick={this.props.onChangeFormType}>Sign
                in</button>
              </p>
            </div>
          </form>
        </div>
      );
    } else if (this.props.type === constants.FORGOT_PASSWORD) {
      body = (
        <div className="auth-form--wrapper__forgot-form">
          <form className="auth-form" style={{borderBottom: 'none'}}>
            <AuthFormInput type="email" placeholder="Email" key="su2" inputRef={this.props.inputRef}
                           onEnterPress={this.props.onEnterPress} onInputChanged={this.props.onInputChanged} field="email"/>
            <div className="auth-form__btn--wrapper">
              <RoundedBtn text="Send" btnRef={this.props.btnRef} disabled={!this.props.isValid} onClick={this.props.onForgotSend}/>
              <p>
                Back to <button className="auth-form__to-signup" onClick={this.props.onChangeFormType}>Sign in</button>
              </p>
            </div>
          </form>
        </div>
      );
    } else if (this.props.type === constants.REMIND_SENT) {
      body = (
        <RoundedBtn text="Sign in" btnRef={this.props.btnRef} disabled={!this.props.isValid} onClick={this.props.onChangeFormType}/>
      );
    }

    return (
      <section className="auth-form--wrapper">
        { title }
        { body }
      </section>
    );
  }
};

AuthFormView.propTypes = () => (
  {
    type: PropTypes.string,
  }
);
const mapStateToProps = state => (
  {
    isValidPasswords: state.rootReducer.isValidPasswords
  }
);
export default connect(mapStateToProps, null)(AuthFormView);
