import React from 'react';
import NavMenuView from './NavMenuView';

class NavMenu extends React.Component {
  render() {
    return (
      <NavMenuView {...this.props} />
    );
  }
}

export default NavMenu;
