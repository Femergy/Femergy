import React from 'react';
import FacebookShareBtn from '../share-facebook-btn/FacebookShareBtn';
import LinkedinShareBtn from '../share-linkedin-btn/LinkedinShareBtn';
import TwitterShareBtn from '../share-twitter-btn/TwitterShareBtn';
import './SharePersonalLink.scss';
import Card from '../card/Card';
import ReferalLink from '../referal-link/ReferalLink';

const SharePersonalLinkView = () => (
  <Card>
    <div className="share-personal-link__text--wrapper">
      <h3 className="share-personal-link__title">Share <span>Your Personal</span> Link</h3>
      <ReferalLink />
    </div>
    {/* <div className="share-personal-link__social-wrapper">
      <FacebookShareBtn />
      <LinkedinShareBtn />
      <TwitterShareBtn />
    </div> */}
  </Card>
);

export default SharePersonalLinkView;
