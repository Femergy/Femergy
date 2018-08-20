import React from 'react';
import './PageContentEarn.scss';
import TotalBalance from '../card-total-balance/TotalBalance';
import InviteFriends from '../../domains/home/components/invite-friends/InviteFriends';
import SharePersonalLink from '../card-share-personal-link/SharePersonalLink';
import BeFemergyWriter from '../card-be-femergy-writer/BeFemergyWriter';
import PageContentWrapper from '../page-content-wrapper/PageContentWrapper';

const ContentView = props => (
  <PageContentWrapper>
    <TotalBalance />
    <p className="earn__steps-text">
      Start building your business network with the help of your friends. Invite them via Personal Referral Link and Earn 10.00 FEM tokens once a friend signs up and verifies their account.
    </p>
    <p className="earn__steps-text">
      Femergy expands! we will introduce new ways to earn and support the network. Stay tuned.
    </p>
    {/* <InviteFriends mini /> */}
    <SharePersonalLink />
    {/* <BeFemergyWriter /> */}
  </PageContentWrapper>
);

export default ContentView;
