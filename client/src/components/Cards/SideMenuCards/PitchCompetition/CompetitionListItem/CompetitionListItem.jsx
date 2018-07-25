import React from 'react';
import PropTypes from 'prop-types';
import StarRating from '../../../../star-rating/StarRating';
import MiniCard from '../../../ItemCards/MiniCard/MiniCard';
import './CompetitionListItem.scss';

export default class CompetitionListItem extends React.Component {
  static propTypes = {
    index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    item: PropTypes.object.isRequired,
  };

  render() {
    const { index, item } = this.props;
    return (
      <div className="competition-list-item">
        <div className="competition-list-item__index">
          {index}
        </div>
        <MiniCard
          {...item}
          disabled
        />
        <StarRating rating={item.rating} mini />
      </div>
    );
  }
}

