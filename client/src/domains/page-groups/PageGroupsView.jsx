import React from 'react';
import PersonalPage from '../../components/personal-page/PersonalPage';
import LeftSideMenu from '../../components/left-side-menu/LeftSideMenu';
import RightSideMenu from '../../components/right-side-menu/RightSideMenu';
import GroupsPageContent from '../../components/page-content-groups/PageContentGroups';
import MyGroups from '../../components/card-my-groups/MyGroups';

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
