import React from 'react';
import PersonalPage from '../personal-page/PersonalPage';
import LeftSideMenu from '../left-side-menu/LeftSideMenu';
import RightSideMenu from '../right-side-menu/RightSideMenu';
import MyGroups from '../card-my-groups/MyGroups';
import PageContent from './page-content-accelerator/PageContentAccelerator';
import SubmitIdea from '../Cards/SideMenuCards/SubmitIdea/SubmitIdea';
import PitchCompetition from '../Cards/SideMenuCards/PitchCompetition/PitchCompetition';

const PageAcceleratorView = () => (
  <PersonalPage>
    <LeftSideMenu />
    <PageContent/>
    <RightSideMenu>
      <SubmitIdea />
      <PitchCompetition />
    </RightSideMenu>
  </PersonalPage>
);

export default PageAcceleratorView;
