import React from 'react';
import './StarRating.scss';

const StarRatingFull = (props) => {
  let stars = [];
  let emptyStars = [];
  const starRating = (props.rating <= 5 && props.rating >= 0) ? props.rating : 0;
  for (let i = 0; i < starRating; i += 1) {
    stars.push(<button className="star-rating__star" />);
  }
  for (let i = 0; i < 5 - starRating; i += 1) {
    emptyStars.push(<button className="star-rating__empty-star" />);
  }

  return (
    <div className="stars-rating">
      {stars}
      {emptyStars}
    </div>
  );
};

export default StarRatingFull;
