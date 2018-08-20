import React from 'react';
import PersonalPage from '../../components/personal-page/PersonalPage';
import LeftSideMenu from '../../components/left-side-menu/LeftSideMenu';
import PageContent from '../../components/page-content-placeholder/PageContentPlaceholder';
import Link from '../../components/Controls/Link/Link';

const PageCongressView = () => (
  <PersonalPage>
    <LeftSideMenu />
    <PageContent>
      <p>Femergy goal is ambitious. And we are ready to focus on quality. Working solution will be launched in Beta version. Stay tuned.</p>
      <p>Congress will be the core proposal-making institution of the Femergy platform. It will be a direct representation of the community’s best contributors - FEM token owners. When a community member gains a particular number of tokens they will be able to make suggestions and vote on all significant questions related to the platform's development: how to use company profit and finances, roadmap, complex changes in the platform, marketing strategy, platform fees, governance and policies, new functionalities and much more.</p>
      <p>How it works: when a new proposal for a change is published on the platform, token holders will get a new notification under the ‘Congress’ module. These notifications and availability to vote will be visible to users who have reached a particular number of tokens. Each token holder can vote once for a proposed change. In order to bring published proposals to the Femergy management board for decision making, a minimum vote number (participation rate) will be required. If the minimum participation of votes is reached, the created proposal will be introduced to the Femergy management board for a final decision. Token holders will not spend their tokens on voting, but a gas fee will be required. The main benefit for token holders to be a part of the Congress is that they will have a direct influence on the changes to the platform. On the other hand, Femergy will hear its community voice and will be able to make a decision on the future development and growth based on the voice of the majority.</p>
      <p>Check more - <Link to="https://femergy.io/" target="_blank">https://femergy.io/</Link></p>
    </PageContent>
  </PersonalPage>
);

export default PageCongressView;
