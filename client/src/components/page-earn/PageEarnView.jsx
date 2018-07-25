import React from 'react';
import PersonalPage from '../personal-page/PersonalPage';
import LeftSideMenu from '../left-side-menu/LeftSideMenu';
import RightSideMenu from '../right-side-menu/RightSideMenu';
import EarnPageContent from '../page-content-earn/PageContentEarn';
import YouMayBeInterested from '../card-you-may-be-interested/YouMayBeInterested';
import PeopleYouMayKnow from '../card-people-you-may-know/PeopleYouMayKnow';

const PageFeedView = () => (
  <PersonalPage>
    <LeftSideMenu />
    <EarnPageContent />
    <RightSideMenu>
      <YouMayBeInterested />
      <PeopleYouMayKnow />
    </RightSideMenu>
  </PersonalPage>
);

export default PageFeedView;
