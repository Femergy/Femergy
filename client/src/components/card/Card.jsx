import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

class Card extends React.Component {
  static get propTypes() {
    return {
      className: PropTypes.string,
      children: PropTypes.object,
    };
  }

  static get defaultProps() {
    return {
      className: '',
      children: <p>Default</p>,
    };
  }

  render() {
    return (
      <div className={`card ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
