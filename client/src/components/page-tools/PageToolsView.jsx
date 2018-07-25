import React from 'react';
import PersonalPage from '../personal-page/PersonalPage';
import LeftSideMenu from '../left-side-menu/LeftSideMenu';
import RightSideMenu from '../right-side-menu/RightSideMenu';
import ToolsPageContent from '../page-content-tools/ToolsPageContent';
import YouMayBeInterested from '../card-you-may-be-interested/YouMayBeInterested';
import PeopleYouMayKnow from '../card-people-you-may-know/PeopleYouMayKnow';

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
