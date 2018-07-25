import React from 'react';
import PropTypes from 'prop-types';
import MiniCard from '../mini-card/MiniCard';
import './MyGroups.scss';

const MyGroupsView = props => (
  <section className="my-groups">
    <h2 className="my-groups__title">My Groups</h2>
    <div className="my-groups__list">
      {props.items.map(card => (
        <MiniCard
          {...card}
          key={card.id}
          isSetting
        />))}
    </div>
  </section>
);

MyGroupsView.propTypes = () => (
  {
    cards: PropTypes.array,
  }
);

export default MyGroupsView;
