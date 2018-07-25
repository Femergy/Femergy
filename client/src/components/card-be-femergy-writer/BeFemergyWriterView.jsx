import React from 'react';
import './BeFemergyWriter.scss';
import RoundedBtn from '../rounded-btn/RoundedBtn';
import Form from '../card-form/Form';
import FormField from '../card-form/form-field/FormField';
import Card from '../card/Card';

const BeFemergyWriterView = () => (
  <Card>
    <div className="be-femergy-writer__text-wrapper">
      <h3 className="be-femergy-writer__title">Be <span>Femergy</span> Writer</h3>
      <p className="be-femergy-writer__text">
        Share news about Femergy and submit article here. We’ll review the article, and your reward
        will be assigned as soon as possible.
      </p>
      <Form className="be-femergy-writer__form">
        <FormField className="be-femergy-writer__form-field" placeholder="Blog or news section link" />
        <FormField className="be-femergy-writer__form-field" placeholder="Comment" />
      </Form>
      <div className="be-femergy-writer__btn-wrapper">
        <RoundedBtn text="Submit" classMod="be-femergy-writer__submit-btn" />
      </div>
    </div>
  </Card>
);

export default BeFemergyWriterView;
