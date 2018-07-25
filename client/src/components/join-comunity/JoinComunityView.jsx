import React from 'react';
import RoundedBtn from '../rounded-btn/RoundedBtn';
import './JoinComunity.scss';
import SocialTelegramCard from '../social-telegram-card/SocialTelegramCard';
import SocialMediumCard from '../social-medium-card/SocialMediumCard';
import SocialLinkedinCard from '../social-linkedin-card/SocialLinkedinCard';
import SocialTwitterCard from '../social-twitter-card/SocialTwitterCard';

const JoinComunityView = () => (
  <div className="join-comunity">
    <h3 className="join-comunity__title">Join Femergy Community</h3>
    <div className="referal-link-card__social--wrapper">
      <SocialTelegramCard />
      <SocialLinkedinCard />
      <SocialTwitterCard />
      <SocialMediumCard />
    </div>
    {/* <RoundedBtn text="Show more" classMod="btn-style" /> */}
  </div>
);

export default JoinComunityView;
