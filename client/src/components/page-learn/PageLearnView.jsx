import React from 'react';
import PersonalPage from '../personal-page/PersonalPage';
import LeftSideMenu from '../left-side-menu/LeftSideMenu';
import PageContent from '../page-content-placeholder/PageContentPlaceholder';
import Link from '../Controls/Link/Link';

const PageLearnView = () => (
  <PersonalPage>
    <LeftSideMenu />
    <PageContent>
      <p>Femergy goal is ambitious. And we are ready to focus on quality. Working solution will be launched in Beta version. Stay tuned.</p>
      <p>An entrepreneurial learning module which will allow users to learn the various skills required to successfully start and run their own business, and gain skills to help with business growth.</p>
      <p>The entrepreneurial course will be free and accessible to all as a trial version. The content itself will be created, moderated and managed by the Congress. Topics will vary depending on demand, but will generally be dedicated to business skills, blockchain technology and any other relevant topics required by the Femergy platform community. Contributing to the entrepreneurial learning module and the base level courses will be rewarded with tokens.</p>
      <p>Premium learning courses on different topics will also be available which can be reviewed and purchased by users. Anyone can post a premium video for which the platform will receive a basic fee upon successful transaction. Users can also request videos or training courses on different topics.</p>
      <p>Check more - <Link to="https://femergy.io/" target="_blank">https://femergy.io/</Link></p>
    </PageContent>
  </PersonalPage>
);

export default PageLearnView;
