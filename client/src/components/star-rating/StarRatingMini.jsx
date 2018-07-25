import React from 'react';
import PropTypes from 'prop-types';
import './StarRating.scss';

const StarRatingMini = (props) => {
  const rating = props.rating <= 10 && props.rating >= 0 ? props.rating : 0;
  return (
    <div className="stars-rating">
      <div className="stars-rating__value">{rating}</div>
      <button className="star-rating__star" />
    </div>
  );
};

StarRatingMini.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

StarRatingMini.defaultProps = {
  rating: 0,
}

export default StarRatingMini;
