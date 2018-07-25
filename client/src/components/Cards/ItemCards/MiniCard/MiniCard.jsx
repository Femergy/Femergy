import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../../Controls/Buttons/Button/Button';
import Icon from '../../../icon/Icon';
import './MiniCard.scss';

const MiniCard = (props) => {
  return (
    <div className={classNames('mini-card', props.className)}>
      <div className="mini-card__info-wrapper">
        <div className={classNames('mini-card__image', props.icon && 'mini-card__with-icon', `mini-card__image-${props.iconSize}`)}>
          {props.icon && <img src={props.icon} alt={props.title} />}
        </div>
        <div className="mini-card__info">
          <h3 className={classNames('mini-card__info__title', props.isVerified && 'is-verified')}>{props.title}</h3>
          <p className="mini-card__info__sub-title">{props.subTitle}</p>
        </div>
      </div>
      {!props.disabled &&
        <Button className="mini-card__click-btn">
          {props.isSetting ?
          <Icon type="tool" /> :
          <Icon type="plus-outlined" />}
        </Button>
      }
    </div>
  );
};

MiniCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.oneOf(['small', 'medium', 'big']),
  isVerified: PropTypes.bool,
  isSetting: PropTypes.bool,
  disabled: PropTypes.bool,
}

MiniCard.defaultProps = {
  className: null,
  iconSize: 'medium',
  isVerified: false,
  isSetting: false,
  disabled: false,
}

export default MiniCard;
