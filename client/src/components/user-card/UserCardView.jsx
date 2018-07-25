import React from 'react';
import PropTypes from 'prop-types';
import FileInput from '../file-input/FileInput';
import './UserCard.scss';
import RoundedBtn from '../rounded-btn/RoundedBtn';
import config from '../../../config.json';

const UserCardView = props => (
  <div className="user-card">
    <section className="user-card__info">
      <div className="user-card__image-wrapper">
        <img src={`${config.api.uploaded}/${props.user.photo}`} alt="" />
      </div>
      {
        props.isProfile &&
        <FileInput
          type="file"
          name="photo-upload"
          text="Upload Photo"
          accept="image/*"
          className="user-card__upload-btn"
          onChange={props.onPhotoUpload}
        />
      }
      <h2 className="user-card__name">{props.user.displayName}</h2>
      <h3 className="user-card__prof">{props.profession}</h3>
      { props.user.username && <p className="user-card__org">{`@${props.user.username}`}</p> }
      { props.user.location && <div className="user-card__addres">{props.user.location}</div> }
      {
        (!props.isProfile && !props.isVerified && props.user.email) &&
        <RoundedBtn
          text="Verify your Email"
          classMod="user-card__verify-btn"
          onClick={props.onVerifyClick}
        />
      }
    </section>
    <div className="user-card__sub-info">
      <div className="user-card__sub-info__item">
        <p>Connects</p>
        <p className="number">{props.connects}</p>
      </div>
      <div className="user-card__sub-info__item">
        <p>Followers</p>
        <p className="number">{props.followers}</p>
      </div>
    </div>
  </div>
);

UserCardView.propTypes = () => (
  {
    photo: PropTypes.string,
    name: PropTypes.string,
    addres: PropTypes.string,
    profession: PropTypes.string,
    organisation: PropTypes.string,
    connects: PropTypes.number,
    followers: PropTypes.number,
  }
);

export default UserCardView;
