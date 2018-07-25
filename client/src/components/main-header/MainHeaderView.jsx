import React from 'react';
import PropTypes from 'prop-types';
import './MainHeader.scss';

const MainHeaderView = props => (
  <header className="main-header">
    <ul className="main-header__menu">
      { props.children }
    </ul>
  </header>
);

MainHeaderView.propTypes = () => (
  {
    children: PropTypes.array,
  }
);

export default MainHeaderView;
