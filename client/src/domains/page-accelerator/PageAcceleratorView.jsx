import React from 'react';
import PersonalPage from '../../components/personal-page/PersonalPage';
import LeftSideMenu from '../../components/left-side-menu/LeftSideMenu';
import RightSideMenu from '../../components/right-side-menu/RightSideMenu';
import MyGroups from '../../components/card-my-groups/MyGroups';
import PageContent from './page-content-accelerator/PageContentAccelerator';
import SubmitIdea from '../../components/Cards/SideMenuCards/SubmitIdea/SubmitIdea';
import PitchCompetition from '../../components/Cards/SideMenuCards/PitchCompetition/PitchCompetition';

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
