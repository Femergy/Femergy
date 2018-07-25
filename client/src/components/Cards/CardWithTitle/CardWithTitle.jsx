import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './CardWithTitle.scss';

export default class CardWithTitle extends React.Component {
  static get propTypes() {
    return {
      className: PropTypes.string,
      children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      title: PropTypes.string,
      titleClassName: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      title: null,
      className: null,
      children: <p>Default</p>,
      titleClassName: null,
    };
  }

  render() {
    const { title, children, className, titleClassName } = this.props;
    return (
      <section>
        {title && <h2 className={`card-with-title__title ${titleClassName}`}>{title}</h2>}
        <Card className={className}>
          {children}
        </Card>
      </section>
    );
  }
}
