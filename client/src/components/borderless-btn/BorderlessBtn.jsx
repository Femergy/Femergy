import React from 'react';
import PropTypes from 'prop-types';

import BorderlessBtnView from './BorderlessBtnView';

const BorderlessBtn = props => (
  <BorderlessBtnView {...props} >
    { props.text }
  </BorderlessBtnView>
);

BorderlessBtn.propTypes = () => (
  {
    text: PropTypes.string,
  }
);

export default BorderlessBtn;
