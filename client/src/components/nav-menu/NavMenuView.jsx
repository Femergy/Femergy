import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.scss';
import { constants } from "../../constants";

const NavMenuView = () => (
  <div className="nav-menu">
    <NavLink to={`/${constants.HOME}`} className="nav-menu__item home-menu-bg" activeClassName="nav-menu__item--active">Home</NavLink>
    <NavLink to={`/${constants.GROUPS}`} className="nav-menu__item groups-menu-bg" activeClassName="nav-menu__item--active">Groups</NavLink>
    <NavLink to={`/${constants.FEED}`} className="nav-menu__item feed-menu-bg" activeClassName="nav-menu__item--active">Feed</NavLink>
    <NavLink to={`/${constants.LEARN}`} className="nav-menu__item learn-menu-bg" activeClassName="nav-menu__item--active">Learn</NavLink>
    <NavLink to={`/${constants.ACCELERATOR}`} className="nav-menu__item accelerator-menu-bg" activeClassName="nav-menu__item--active">Accelerator</NavLink>
    <NavLink to={`/${constants.TOOLS}`} className="nav-menu__item tools-menu-bg" activeClassName="nav-menu__item--active">Tools</NavLink>
    <NavLink to={`/${constants.CONGRESS}`} className="nav-menu__item congress-menu-bg" activeClassName="nav-menu__item--active">Congress</NavLink>
    <NavLink to={`/${constants.EARN}`} className="nav-menu__item earn-menu-bg" activeClassName="nav-menu__item--active">Earn</NavLink>
  </div>
);

export default NavMenuView;
