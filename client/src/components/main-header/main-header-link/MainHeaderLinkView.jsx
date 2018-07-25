import React from 'react';
import PropTypes from 'prop-types';

import './MainHeaderLink.scss';

const MainHeaderLinkView = props => (
  <li className="main-header__menu__item">
    <a href={props.href} target={props.target}>
      { props.text }
    </a>
  </li>
);

MainHeaderLinkView.propTypes = () => (
  {
    text: PropTypes.string,
  }
);

export default MainHeaderLinkView;
