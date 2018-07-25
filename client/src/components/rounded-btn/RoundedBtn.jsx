import React from 'react';
import PropTypes from 'prop-types';

import RoundedBtnView from './RoundedBtnView';

const RoundedBtn = props => (
  <RoundedBtnView {...props} >
    { props.text }
  </RoundedBtnView>
);

RoundedBtn.propTypes = () => (
  {
    text: PropTypes.string,
  }
);

export default RoundedBtn;
