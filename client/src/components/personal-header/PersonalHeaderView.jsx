import React from 'react';
import { connect } from 'react-redux'
import './PersonalHeader.scss';
import Logo from '../logo/Logo';
import Search from '../search/Search';
import RoundedBtn from '../rounded-btn/RoundedBtn';
import BorderlessBtn from '../borderless-btn/BorderlessBtn';
import DropMenu from '../drop-menu/DropMenu';
import config from '../../../config.json';


const mapStateToProps = state => (
  {
    bonuses: state.rootReducer.bonuses
  }
);

class PersonalHeaderView extends React.Component {
  render() {
    return (
      <header className="home-header">
        <div className="home-header__content content">
          <Logo type="white"/>
          <div className="home-header__group">
            <Search className="home-header__search" placeholder="Search" disabled/>
            <a href="https://www.femergy.io" target="_blank">
              <RoundedBtn
                text="Join Private Sale"
                classMod="home-header__join"
              />
            </a>
            <BorderlessBtn icon="/images/ic-wallet.svg" text={`${this.props.bonuses} FEM`} classMod="home-header__wallet"/>
          </div>
          <div className="home-header__group">
            <BorderlessBtn icon="/images/ic-messages.svg" classMod="home-header__messages"/>
            <BorderlessBtn icon="/images/ic-notify.svg" classMod="home-header__notify"/>
            <div className="home-header__image-wrapper">
              <img src={`${config.api.uploaded}/${this.props.photo}`} alt=""/>
            </div>
            <BorderlessBtn icon="/images/ic-expand.svg" classMod="home-header__expand" onClick={this.props.onMenuClick}/>
            {this.props.isMenuVisible && <DropMenu items={this.props.items}/>}
          </div>
        </div>
      </header>)
  }
}

export default connect(mapStateToProps, null)(PersonalHeaderView);
