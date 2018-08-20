import React from 'react';
import PersonalPage from '../../components/personal-page/PersonalPage';
import LeftSideMenu from '../../components/left-side-menu/LeftSideMenu';
import RightSideMenu from '../../components/right-side-menu/RightSideMenu';
import FeedPageContent from '../../components/page-content-feed/FeedPageContent';
import YouMayBeInterested from '../../components/card-you-may-be-interested/YouMayBeInterested';
import PeopleYouMayKnow from '../../components/card-people-you-may-know/PeopleYouMayKnow';

const PageFeedView = () => (
  <PersonalPage>
    <LeftSideMenu />
    <FeedPageContent />
    <RightSideMenu>
      <YouMayBeInterested />
      <PeopleYouMayKnow />
    </RightSideMenu>
  </PersonalPage>
);

export default PageFeedView;
