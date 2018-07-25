import React from 'react';
import PropTypes from 'prop-types';
import './HomePageContent.scss';
import InviteFriends from '../invite-friends/InviteFriends';
import ReferalLinkCard from '../referal-link-card/ReferalLinkCard';
import JoinComunity from '../join-comunity/JoinComunity';
import PageContentWrapper from '../page-content-wrapper/PageContentWrapper';

const ContentView = () => (
  <PageContentWrapper>
    <h2 className="home__title">Welcome to Femergy!</h2>
    <p className="home__welcome-text">
      Femergy is a global business network and business accelerator that rewards and rates
      content creators, curators, and every community member who has a positive growth
      impact of the Femergy platform.
    </p>
    <p className="home__welcome-text">
      Start building your business network with the help of your friends. Invite them via Personal Referral Link and Earn 10.00 FEM tokens once a friend signs up and verifies their account.
    </p>
    {/* <InviteFriends /> */}
    <ReferalLinkCard />
    <JoinComunity />
  </PageContentWrapper>
);


ContentView.propTypes = () => (
  {
    name: PropTypes.string,
  }
);

export default ContentView;
