import React from 'react';
import MainSigninView from './MainSigninView';
import AuthForm from '../auth-form/AuthForm';

const MainSignin = props => (
  <MainSigninView {...props}>
    <AuthForm />
  </MainSigninView>
);

export default MainSignin;
