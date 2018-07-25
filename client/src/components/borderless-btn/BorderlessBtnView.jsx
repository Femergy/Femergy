import React from 'react';
import PropTypes from 'prop-types';

import './BorderlessBtn.scss';

const BorderlessBtnView = props => (
  <button className={`borderless-btn ${props.classMod}`} ref={props.btnRef} disabled={props.disabled} onClick={props.onClick} style={props.style} >
    { props.icon && <img className={props.imgClassMod} src={props.icon} alt={props.text} style={props.imgStyle} /> }
    { props.children }
  </button>
);

BorderlessBtnView.propTypes = () => (
  {
    children: PropTypes.array,
    btnRef: PropTypes.func,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    icon: PropTypes.string,
    style: PropTypes.object,
    imgStyle: PropTypes.object,
    classMod: PropTypes.string,
  }
);

BorderlessBtnView.defaultProps = () => (
  {
    classMod: '',
  }
);

export default BorderlessBtnView;
