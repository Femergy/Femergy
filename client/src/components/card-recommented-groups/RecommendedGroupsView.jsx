import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Cards/CardWithTitle/CardWithTitle';
import './RecommendedGroups.scss';

const RecommendedGroupsView = props => (
  <Card title="Recommended Groups" className="recommended-groups">
    {props.cards}
  </Card>
);

RecommendedGroupsView.propTypes = () => (
  {
    cards: PropTypes.array.isRequired,
  }
);

export default RecommendedGroupsView;
