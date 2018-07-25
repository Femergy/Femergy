import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Card from '../../Card/Card';
import Icon from '../../../icon/Icon';
import Button from '../../../Controls/Buttons/Button/Button';
import './ItemCard.scss';

export default class ItemCard extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    subTItle: PropTypes.string,
    time: PropTypes.object,
    image: PropTypes.string,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    title: null,
    subTitle: null,
    time: Date.now(),
    image: null,
    disabled: false,
  };

  render() {
    const { title, subTitle, time, image, disabled } = this.props;
    return (
      <Card className="item-card">
        <header className="item-card__header" style={{ backgroundImage: `url(${image})` }}>
          <div className="item-card__mask">
            <h3 className="item-card__title">{title}</h3>
          </div>
        </header>
        <footer className="item-card__footer">
          <div className="item-card__text">
            <p className="item-card__sub-title">{subTitle}</p>
            <div className="item-card__time">
              <Icon type="clock" />
              <p className="item-card__time-value">
                {moment(new Date(time).toUTCString()).format('DD.MM.YY HH:mm')}
              </p>
            </div>
          </div>
          <div className="item-card__controls">
            {!disabled &&
            <Button className="item-card__plus-btn">
              <Icon type="plus-outlined" />
            </Button>}
          </div>
        </footer>
      </Card>
    );
  }
}

