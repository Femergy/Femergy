import React from 'react';
import './RightSideMenu.scss';

const RightSideMenuView = props => (
  <aside className="right-side-menu" style={{ right: props.right }}>
    {props.children}
  </aside>
);

export default RightSideMenuView;
