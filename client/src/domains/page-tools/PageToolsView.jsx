import React from 'react';
import PersonalPage from '../../components/personal-page/PersonalPage';
import LeftSideMenu from '../../components/left-side-menu/LeftSideMenu';
import RightSideMenu from '../../components/right-side-menu/RightSideMenu';
import ToolsPageContent from '../../components/page-content-tools/ToolsPageContent';
import YouMayBeInterested from '../../components/card-you-may-be-interested/YouMayBeInterested';
import PeopleYouMayKnow from '../../components/card-people-you-may-know/PeopleYouMayKnow';

const PageToolsView = () => (
  <PersonalPage>
    <LeftSideMenu />
    <ToolsPageContent />
    <RightSideMenu>
      <YouMayBeInterested />
      <PeopleYouMayKnow />
    </RightSideMenu>
  </PersonalPage>
);

export default PageToolsView;
