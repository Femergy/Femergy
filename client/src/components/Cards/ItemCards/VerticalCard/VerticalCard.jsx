import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './VerticalCard.scss';

class VerticalCard extends React.Component {
  static propTypes = {
    item: PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.string,
      subTitle: PropTypes.string,
    }).isRequired
  };

  render() {
    const { item: { icon, title, subTitle } } = this.props;
    return (
      <section className="vertical-card">
        <div className={classNames('vertical-card__image', icon && 'with-icon')} style={icon && { backgroundImage: `url(${icon})` }} />
        {title && <h4 className="vertical-card__title">{title}</h4>}
        {subTitle && <p className="vertical-card__sub-title">{subTitle}</p>}
      </section>
    );
  }
}

export default VerticalCard;
