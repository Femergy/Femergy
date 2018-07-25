import React from 'react';
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';

import './AuthFormInput.scss';
import '../../../../public/images/ic-eye.svg';

const setNotValidText = (type) => {
  switch (type) {
    case 'password':
      return 'Password mustn\'t be empty';
    case 'text':
      return 'You must enter your name and surname';
    case 'email':
      return 'You must enter valid email address';
    default:
      return 'unhandled input type';
  }
};

const AuthFormInputView = (props) => {
  const { isValid,
          constType,
          type,
          isValidPasswords,
          placeholder,
          inputRef,
          onBlur,
          onChange,
          onEnterPress,
          onEyeClick } = props;

  const notValidText = setNotValidText(constType);
  const classMod = props.type === 'password' ? '-pass' : '';
  const isPasswordsMatch = type === 'passwords' && isValidPasswords;

  let isValidStyle = {};
  if (!isValid) isValidStyle = { borderBottomColor: 'red' };
  return (
    <div className="auth-form__input--wrapper">
      <input
        className={`auth-form__input${classMod}`}
        style={isValidStyle}
        type={type}
        placeholder={placeholder}
        ref={inputRef}
        onBlur={onBlur}
        onChange={onChange}
        onKeyDown={onEnterPress}
      />
      { constType === 'password' && <button onClick={onEyeClick}><img src="/images/ic-eye.svg" alt="" /></button> }
      { !isValid && <p className="auth-form__not-valid">{notValidText}</p> }
    </div>
  );
};

AuthFormInputView.propTypes = () => (
  {
    type: PropsTypes.string,
    isValid: PropsTypes.bool,
  }
);

const mapStateToProps = state => (
  {
    isValidPasswords: state.rootReducer.isValidPasswords
  }
);

export default connect(mapStateToProps, null)(AuthFormInputView);
