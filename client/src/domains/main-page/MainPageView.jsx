import React from 'react';
import PropTypes from 'prop-types';
import './MainPage.scss';

const MainPageView = props => (
  <div className="main-page">
    {props.children}
  </div>
);

MainPageView.propTypes = () => (
  {
    children: PropTypes.array,
  }
);

export default MainPageView;
