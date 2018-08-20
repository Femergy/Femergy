import React from 'react';
import PersonalPage from '../../components/personal-page/PersonalPage';
import LeftSideMenu from '../../components/left-side-menu/LeftSideMenu';
import RightSideMenu from '../../components/right-side-menu/RightSideMenu';
import ProfilePageContent from '../../components/page-content-profile/ProfilePageContent';
import YourExternalLinks from '../../components/card-your-external-links/YourExternalLinks';

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
