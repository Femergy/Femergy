import React from 'react';
import { Link } from 'react-router-dom';
import BorderlessBtn from '../borderless-btn/BorderlessBtn';
import './InviteFriends.scss';
import Card from '../card/Card';
import { constants } from '../../constants';

const InviteFriendsView = props => (
  <Card>
    <div className={`invite-friends__text--wrapper ${props.mini ? 'invite-friends__mini-icon' : ''}`}>
      <h3 className={`invite-friends__title ${props.mini ? 'invite-friends__mini-title' : ''}`}>Invite Friends and Earn <span>FEM Tokens</span></h3>
      <p className="invite-friends__text">
        {
          !props.mini ?
            'Earn - Start building your business network with the help of your friends. Invite them via Linkedin and Earn 10.00 FEM tokens once a friend signs up and verifies their account.' :
            'Start building your business network with the help of your friends. Invite them via Linkedin and Earn 10.00 FEM tokens once a friend signs up and verifies their account.'
        }
      </p>
    </div>
    <div className="invite-friends__btns--wrapper">
      {/* <Link to={`/${constants.HOME}`} className="invite-friend__link">
        <BorderlessBtn icon="/images/ic-google-white.svg" text="Invite more members" classMod="google-btn-style" />
      </Link> */}
      <Link to={`/${constants.IMPORT_LN_WINDOW}`} className="invite-friend__link">
        <BorderlessBtn icon="/images/ic-link-white.svg" text="Grow your business network" classMod="in-btn-style" />
      </Link>
    </div>
  </Card>
);

export default InviteFriendsView;
