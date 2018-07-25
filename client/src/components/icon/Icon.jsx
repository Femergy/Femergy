import React from 'react';
import PropTypes from 'prop-types';
import './Icon.scss';

class Icon extends React.Component {
  static get propTypes() {
    return {
      type: PropTypes.string.isRequired,
      style: PropTypes.object,
      className: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      style: null,
      className: null,
    };
  }

  getIcon() {
    const { type } = this.props;
    const icon = {};
    switch (type) {
      case 'facebook':
        icon.alt = 'facebook';
        icon.src = '/images/ic-facebook.svg';
        break;
      case 'google':
        icon.alt = 'google';
        icon.src = '/images/ic-google.svg';
        break;
      case 'google+':
        icon.alt = 'google+';
        icon.src = '/images/ic-g+.svg';
        break;
      case 'twitter':
        icon.alt = 'twitter';
        icon.src = '/images/ic-twitter.svg';
        break;
      case 'linkedin':
        icon.alt = 'linkedin';
        icon.src = '/images/ic-linkedin.svg';
        break;
      case 'telegram':
        icon.alt = 'telegram';
        icon.src = '/images/ic-telegram.svg';
        break;
      case 'medium':
        icon.alt = 'medium';
        icon.src = '/images/ic-medium.svg';
        break;
      case 'clock':
        icon.alt = 'clock';
        icon.src = '/images/clock.svg';
        break;
      case 'plus-outlined':
        icon.alt = 'plus-outlined';
        icon.src = '/images/ic-plus.svg';
        break;
      case 'plus':
        icon.alt = 'plus';
        icon.src = '/images/plus-cross.svg';
        break;
      case 'tool':
        icon.alt = 'tool';
        icon.src = '/images/ic-settings.svg';
        break;
      default:
        icon.alt = 'default';
        icon.src = '/images/camera.svg';
    }
    return icon;
  }

  render() {
    const { src, alt } = this.getIcon();
    return (
      <img {...this.props} src={src} alt={alt} />
    );
  }
}

export default Icon;
