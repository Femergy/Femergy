import React from 'react';
import MainHeaderView from './MainHeaderView';
import MainHeaderLink from './main-header-link/MainHeaderLink';

const MainHeader = () => (
  <MainHeaderView>
    <MainHeaderLink text="Join Private Sale" href="https://www.femergy.io" target="_blank" />
    <MainHeaderLink text="Sign in" />
  </MainHeaderView>
);

export default MainHeader;
