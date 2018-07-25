import React from 'react';
import './Experience.scss';
import Form from '../card-form/Form';
import FormField from '../card-form/form-field/FormField';
import FormSaveBtn from '../card-form/form-save-btn/FormSaveBtn';
import FormAddBtn from '../card-form/form-add-btn/FormAddBtn';

const ExperienceView = props => (
  <section className="experience">
    <h2 className="experience__title">Experience</h2>
    <div className="experience__list">
      <Form>
        <FormField title="Job Title" placeholder="Product Manager" />
        <FormField title="Organization" placeholder="Femergy" />
        <FormField title="Start Date" placeholder="dd.mm.yy" isDate />
        <FormField title="End Date" placeholder="dd.mm.yy" isDate />
        <label />
        <label htmlFor="experience__end-date-input" className="experience__is-current-label">
          <input id="experience__end-date-input" type="checkbox" className="experience__is-current-input" />
          <p>Current</p>
        </label>
      </Form>
      <div className="experience__btn--wrapper">
        <FormAddBtn />
        <FormSaveBtn />
      </div>
    </div>
  </section>
);

export default ExperienceView;
