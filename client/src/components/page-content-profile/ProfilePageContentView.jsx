import React from 'react';
import './ProfilePageContent.scss';
import GeneralInfo from '../card-general-info/GeneralInfo';
import ChangePassword from '../card-change-password/ChangePassword';
import Experience from '../card-experience/Experience';
import Skills from '../card-skills/Skills';
import Education from '../card-education/Education';

const ProfilePageContentView = props => (
  <div className="profile">
    <GeneralInfo />
    <ChangePassword />
    <Experience />
    <Skills />
    <Education />
  </div>
);

export default ProfilePageContentView;
