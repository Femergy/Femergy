import React from 'react';
import PropTypes from 'prop-types';
import './SocialCard.scss';
import Icon from '../icon/Icon';
import RoundedBtn from '../rounded-btn/RoundedBtn';

class SocialCard extends React.Component {
  propTypes = () => (
    {
      title: PropTypes.string.isRequired,
      icon: PropTypes.oneOf(['facebook', 'twitter', 'google', 'google+', 'linkedin', 'telegram', 'medium']).isRequired,
      onClick: PropTypes.func,
      btnText: PropTypes.string,
      className: PropTypes.string,
      disabled: PropTypes.bool,
    }
  );

  defaultProps = () => (
    {
      title: 'default',
      onClick: () => console.log('Social card click'),
      btnText: 'Join Group',
      className: '',
      disabled: false,
    }
  );

  render() {
    return (
      <div className={`social-card ${this.props.className}`}>
        <Icon className="social-card__image" type={this.props.icon} />
        <h4 className="social-card__title">{this.props.title}</h4>
        {/* <p className="social-card__followers">64k+ followers</p> */}
        <RoundedBtn text="Join Group" classMod="social-btn-style" onClick={this.props.onClick} disabled={this.props.disabled} />
      </div>
    );
  }
}

export default SocialCard;
