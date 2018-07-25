import React from 'react';
import './LeftSideMenu.scss';
import UserCard from '../user-card/UserCard';
import NavMenu from '../nav-menu/NavMenu';

const LeftSideMenuView = props => (
  <aside className="left-side-menu" style={{ left: props.left }}>
    <UserCard
      isProfile={props.isProfile}
    />
    <NavMenu />
    <div className="left-side-menu__other">
      <a href="mailto:evelina@femergy.com">Contact Us</a>
    </div>
  </aside>
);

export default LeftSideMenuView;
