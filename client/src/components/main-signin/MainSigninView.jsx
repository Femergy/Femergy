import React from 'react';
import PropTypes from 'prop-types';

import './MainSignin.scss';

const MainSigninView = props => (
  <div className="main-signin">
    {props.children}
  </div>
);

MainSigninView.propTypes = () => (
  {
    children: PropTypes.array,
  }
);

export default MainSigninView;
