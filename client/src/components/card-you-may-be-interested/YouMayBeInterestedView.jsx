import React from 'react';
import PropTypes from 'prop-types';
import './YouMayBeInterested.scss';
import MiniCard from '../mini-card/MiniCard';
import Card from '../Cards/CardWithTitle/CardWithTitle';

const YouMayBeInterestedView = props => (
  <Card title="You May Be Interested" className="you-may-be-interested">
    {
      props.items.map(card => (
        <MiniCard
          {...card}
          key={card.id}
        />))
    }
  </Card>
);

YouMayBeInterestedView.propTypes = () => (
  {
    cards: PropTypes.array,
  }
);

export default YouMayBeInterestedView;
