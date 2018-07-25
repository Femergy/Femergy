import React from 'react';
import './ChangePassword.scss';
import Form from '../card-form/Form';
import FormField from '../card-form/form-field/FormField';
import FormSaveBtn from '../card-form/form-save-btn/FormSaveBtn';

const ChangePasswordView = props => (
  <section className="change-password">
    <h2 className="change-password__title">Change Password</h2>
    <div className="change-password__list">
      <Form>
        <FormField title="Current Password" placeholder="Current Password" type="password" />
        <label className="change-password__label" />
        <FormField title="New Password" placeholder="New Password" type="password" />
        <FormField title="Confirm Password" placeholder="Confirm Password" type="password" />
      </Form>
      <div className="change-password__btn--wrapper">
        <FormSaveBtn />
      </div>
    </div>
  </section>
);

export default ChangePasswordView;
