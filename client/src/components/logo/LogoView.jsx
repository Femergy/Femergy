import React from 'react';
import PropTypes from 'prop-types';
import './Logo.scss';
import { constants } from '../../constants';

const LogoView = props => (
  <a href={constants.SERVER} className="main-header__logo-link" style={props.style}>
    {
      <img
        src={props.type === 'white' ? '/images/logo-white.svg' : '/images/logo-color.svg'}
        className={props.big ? 'main-header__logo-img--big' : 'main-header__logo-img'}
        alt="logo"
      />
    }
  </a>
);

LogoView.propTypes = {
  type: PropTypes.oneOf(['white', 'color']),
  big: PropTypes.bool,
};

LogoView.defaultProps = {
  type: 'white',
  big: false,
};

export default LogoView;
