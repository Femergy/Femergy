import React from 'react';
import PropTypes from 'prop-types';

import MainHeaderLinkView from './MainHeaderLinkView';

const MainHeaderLink = props => (
  <MainHeaderLinkView {...props} />
);

MainHeaderLink.propTypes = () => (
  {
    text: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
  }
);

MainHeaderLink.defaultProps = () => (
  {
    text: 'empty',
    href: '/auth',
  }
);


export default MainHeaderLink;
