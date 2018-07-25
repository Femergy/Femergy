import React from 'react';
import { connect } from 'react-redux';
import PersonalHeaderView from './PersonalHeaderView';
import { logout } from '../../actions/actions';
import { constants } from "../../constants";

const mapStateToProps = state => (
  {
    photo: state.rootReducer.user.photo,
  }
);

const mapDispatchToProps = dispatch => (
  {
    logout: () => dispatch(logout()),
    toProfile: () => dispatch(toProfile()),
  }
);

class PersonalHeader extends React.Component {
  state = {
    isMenuVisible: false,
    items: [
      {
        key: 'menu-item-profile',
        title: 'Profile',
        icon: '/images/settings.svg',
        to: `/${constants.PROFILE}`,
        onClick: this.onProfileClick.bind(this),
      },
      {
        key: 'menu-item-logout',
        title: 'Logout',
        icon: '/images/exit_to_app.svg',
        to: `/${constants.AUTH_PAGE}`,
        onClick: this.onLogoutClick.bind(this),
      },
    ],
  };

  onMenuBtnClick = this.onMenuBtnClick.bind(this);

  onMenuBtnClick() { this.setState({ isMenuVisible: !this.state.isMenuVisible }); }
  onProfileClick() { this.onMenuBtnClick(); }
  onLogoutClick() {
    this.onMenuBtnClick();
    this.props.logout();
  }

  render() {
    return (
      <PersonalHeaderView
        {...this.props}
        {...this.state}
        onMenuClick={this.onMenuBtnClick}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalHeader);
