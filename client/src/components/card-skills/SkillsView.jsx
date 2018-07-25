import React from 'react';
import './Skills.scss';
import Form from '../card-form/Form';
import FormSaveBtn from '../card-form/form-save-btn/FormSaveBtn';

const SkillsView = props => (
  <section className="skills">
    <h2 className="skills__title">Skills</h2>
    <div className="skills__list">
      <Form>
        <label htmlFor="skills__name-input" className="skills__label">
          <p>Type Skill Here</p>
          <input id="skills__name-input" type="text" className="skills__input" placeholder="Communication" />
        </label>
        <label className="skills__label" />
      </Form>
      <div className="skills__skills-list">
        {
          props.skills.map(skill => (
            <button className="skills__skill-point" key={skill}>{skill}</button>
          ))
        }
      </div>
      <div className="skills__btn--wrapper">
        <FormSaveBtn />
      </div>
    </div>
  </section>
);

export default SkillsView;
