import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './MiniCard.scss';

const addImage = '/images/ic-plus.svg';
const settingsImage = '/images/settings.svg';

const MiniCardView = (props) => {
  const classMod = props.isVerified ? 'is-verified' : '';
  return (
    <div className="mini-card">
      <div className="mini-card__info-wrapper">
        <div className={classNames('mini-card__image', props.icon && 'mini-card__with-icon', `mini-card__image-${props.iconSize}`)}>
          {props.icon && <img src={props.icon} alt={props.title} />}
        </div>
        <div className="mini-card__info">
          <h3 className={`mini-card__info__title ${classMod}`}>{props.title}</h3>
          <p className="mini-card__info__sub-title">{props.subTitle}</p>
        </div>
      </div>
      {!props.disabled &&
        <button className="mini-card__click-btn">
          <img src={props.isSetting ? settingsImage : addImage} alt={props.title} className={!props.isSetting ? 'mini-card__plus-img' : 'mini-card__setting-img'} />
        </button>
      }
    </div>
  );
};

MiniCardView.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.oneOf(['small', 'medium', 'big']),
  isVerified: PropTypes.bool,
  isSetting: PropTypes.bool,
  disabled: PropTypes.bool,
}

MiniCardView.defaultProps = {
  iconSize: 'medium',
  isVerified: false,
  isSetting: false,
  disabled: false,
}

export default MiniCardView;
