import React from 'react';
import PropTypes from 'prop-types';
import './Link.scss';

export default class Link extends React.Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  };

  static propTypes = {
    children: null,
  };

  render() {
    const { to, children } = this.props;
    return (
      <a {...this.props} href={to} className="base-link">{children}</a>
    );
  }
}

