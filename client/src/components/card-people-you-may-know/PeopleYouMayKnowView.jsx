import React from 'react';
import PropTypes from 'prop-types';
import MiniCard from '../Cards/ItemCards/MiniCard/MiniCard';
import Card from '../Cards/CardWithTitle/CardWithTitle';
import './PeopleYouMayKnow.scss';

const PeopleYouMayKnowView = props => (
  <Card title="People You May Know" className="people-you-may-know">
    {
      props.items.map(card => (
        <MiniCard
          {...card}
          key={card.id}
        />))
    }
  </Card>
);

PeopleYouMayKnowView.propTypes = () => (
  {
    cards: PropTypes.array,
  }
);

export default PeopleYouMayKnowView;
