import React from 'react';
import './Education.scss';
import Form from '../card-form/Form';
import FormField from '../card-form/form-field/FormField';
import FormSaveBtn from '../card-form/form-save-btn/FormSaveBtn';
import FormAddBtn from '../card-form/form-add-btn/FormAddBtn';

const EducationView = props => (
  <section className="education">
    <h2 className="education__title">Education</h2>
    <div className="education__list">
      <Form>
        <FormField title="School Name" placeholder="Product Manager" />
        <FormField title="Field of Study" placeholder="Femergy" />
        <FormField title="Start Date" placeholder="dd.mm.yy" isDate />
        <FormField title="End Date" placeholder="dd.mm.yy" isDate />
        <label />
        <label htmlFor="education__end-date-input" className="education__is-current-label">
          <input id="education__end-date-input" type="checkbox" className="education__is-current-input" />
          <p>Current</p>
        </label>
      </Form>
      <div className="education__btn--wrapper">
        <FormAddBtn />
        <FormSaveBtn />
      </div>
    </div>
  </section>
);

export default EducationView;
