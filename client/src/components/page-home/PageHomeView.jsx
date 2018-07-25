import React from 'react';
import PersonalPage from '../personal-page/PersonalPage';
import LeftSideMenu from '../left-side-menu/LeftSideMenu';
import RightSideMenu from '../right-side-menu/RightSideMenu';
import HomePageContent from '../page-content-home/HomePageContent';
import RecommendedGroups from '../card-recommented-groups/RecommendedGroups';

const PageHomeView = () => (
  <PersonalPage>
    <LeftSideMenu />
    <HomePageContent />
    <RightSideMenu>
      <RecommendedGroups />
    </RightSideMenu>
  </PersonalPage>
);

export default PageHomeView;
