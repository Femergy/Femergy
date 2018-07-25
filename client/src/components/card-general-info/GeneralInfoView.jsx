import React from 'react';
import './GeneralInfo.scss';
import Form from '../card-form/Form';
import FormField from '../card-form/form-field/FormField';
import FormSaveBtn from '../card-form/form-save-btn/FormSaveBtn';

const GeneralInfoView = (props) => {
  const verifyBtn = props.isVerified ?
    <p className="general-info__verified-text">Email Verified</p> :
    <button className="general-info__verify-btn" onClick={props.onVerifyClick}>Verify your Email</button>;
  return (
    <section className="general-info">
      <h2 className="general-info__title">General Info</h2>
      <div className="general-info__list">
        <Form onSubmit={props.onSubmit}>
          <FormField title="Name" placeholder={props.user.displayName || 'Enter your name'} value={props.name} onChange={props.onChangeName} isValid={props.isNameValid} />
          <FormField title="Username" placeholder={props.user.username || 'Enter your Username'} value={props.username} onChange={props.onChangeUsername} isValid={props.isUsernameValid} />
          <FormField title="Email" placeholder={props.user.email || 'Enter your email'} type="email" value={props.email} onChange={props.onChangeEmail} isValid={props.isEmailValid} />
          { props.user.email && verifyBtn }
          <label htmlFor="bio-textarea" className="general-info__bio-label">
            <p>Bio</p>
            <textarea name="bio-textarea" cols="30" rows="6" placeholder={props.user.bio || 'Enter your biography, 150 symbols max'} value={props.bio} onChange={props.onChangeBio} className={!props.isBioValid && 'general-info__not-valid-field'} />
          </label>
          <FormField title="Location" placeholder={props.user.location || 'Your location'} value={props.location} onChange={props.onChangeLocation} isValid={props.isLocationValid} />

          <div className="general-info__btn--wrapper">
            <FormSaveBtn />
          </div>
        </Form>
      </div>
    </section>
  );
}

export default GeneralInfoView;
