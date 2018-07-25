import React from 'react';
import PropTypes from 'prop-types';

import './RoundedBtn.scss';

const RoundedBtnView = props => (
  <button className={`rounded-btn ${props.classMod}`} ref={props.btnRef} disabled={props.disabled} onClick={props.onClick} style={props.style}>
    { props.children }
  </button>
);

RoundedBtnView.propTypes = () => (
  {
    children: PropTypes.array,
    btnRef: PropTypes.func,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object,
  }
);

RoundedBtnView.defaultProps = () => (
  {
    backgroundColor: '#7297FF',
  }
);

export default RoundedBtnView;
