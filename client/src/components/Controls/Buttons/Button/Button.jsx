import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.scss';

export default class Button extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    outlined: PropTypes.bool,
    color: PropTypes.oneOf(['success', 'fail', 'regular', 'disabled']),
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  };

  static defaultProps = {
    className: null,
    outlined: false,
    color: null,
    children: null,
  };

  render() {
    const { className, children, color, outlined, props } = this.props;
    return (
      <button {...props} className={classNames('button-btn', color && `button-${color}${outlined ? '-outlined' : ''}-btn`, className)}>
        {children}
      </button>
    );
  }
}
