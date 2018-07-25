import React from 'react';
import PersonalPage from '../personal-page/PersonalPage';
import LeftSideMenu from '../left-side-menu/LeftSideMenu';
import RightSideMenu from '../right-side-menu/RightSideMenu';
import GroupsPageContent from '../page-content-groups/PageContentGroups';
import MyGroups from '../card-my-groups/MyGroups';

const PageGroupsView = () => (
  <PersonalPage>
    <LeftSideMenu />
    <GroupsPageContent />
    <RightSideMenu>
      <MyGroups />
    </RightSideMenu>
  </PersonalPage>
);

export default PageGroupsView;
