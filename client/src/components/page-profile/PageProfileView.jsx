import React from 'react';
import PersonalPage from '../personal-page/PersonalPage';
import LeftSideMenu from '../left-side-menu/LeftSideMenu';
import RightSideMenu from '../right-side-menu/RightSideMenu';
import ProfilePageContent from '../page-content-profile/ProfilePageContent';
import YourExternalLinks from '../card-your-external-links/YourExternalLinks';

const PageProfileView = () => (
  <PersonalPage>
    <LeftSideMenu isProfile />
    <ProfilePageContent />
    <RightSideMenu>
      <YourExternalLinks />
    </RightSideMenu>
  </PersonalPage>
);

export default PageProfileView;
