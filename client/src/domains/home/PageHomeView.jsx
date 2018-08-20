import React from 'react';
import PersonalPage from '../../components/personal-page/PersonalPage'
import LeftSideMenu from '../../components/left-side-menu/LeftSideMenu';
import RightSideMenu from '../../components/right-side-menu/RightSideMenu';
import HomePageContent from './components/home-page-content/HomePageContent';
import RecommendedGroups from '../../components/card-recommented-groups/RecommendedGroups';

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
