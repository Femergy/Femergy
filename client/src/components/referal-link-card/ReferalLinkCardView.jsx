import React from 'react';
import FacebookShareBtn from '../share-facebook-btn/FacebookShareBtn';
import LinkedinShareBtn from '../share-linkedin-btn/LinkedinShareBtn';
import TwitterShareBtn from '../share-twitter-btn/TwitterShareBtn';
import './ReferalLinkCard.scss';
import ReferalLink from '../referal-link/ReferalLink';

const ReferalLinkCardView = () => (
  <div className="referal-link-card">
    <h3 className="referal-link-card__title">Personal Referral Link</h3>
    <ReferalLink />
    {/* <div className="referal-link-card__social-wrapper">
      <FacebookShareBtn />
      <LinkedinShareBtn />
      <TwitterShareBtn />
    </div> */}
  </div>
);

export default ReferalLinkCardView;
