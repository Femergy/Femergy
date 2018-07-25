import React from 'react';
import RecommendedGroupsView from './RecommendedGroupsView';
import MiniCard from '../mini-card/MiniCard';

const testCardList = [
  {
    id: '1',
    title: 'Femergy Founders Club',
    subTitle: 'Invitations Only',
    description: 'Exclusive group for Alpha members',
    icon: '/images/groups-fem-logo.svg',
    disabled: true,
  },
  {
    id: '2',
    title: 'Femergy ICO Participants',
    subTitle: 'Closed Community',
    description: 'All about Femergy ICO',
    icon: '/images/groups-coins.svg',
    disabled: true,
  },
  {
    id: '3',
    title: 'Women in Blockchain',
    subTitle: 'Open Community',
    description: 'Blockchain, cryptocurrency, and tech',
    icon: '/images/groups-2.svg',
    disabled: true,
  },
];

class RecommendedGroups extends React.Component {
  constructor(props) {
    super(props);
    this.cards = null;

    this.buildCards(testCardList);
  }

  buildCards(cardList) {
    this.cards = cardList.map(card => (
      <MiniCard
        {...card}
        key={card.id}
      />));
  }

  render() {
    return (
      <RecommendedGroupsView {...this.props} cards={this.cards} />
    );
  }
}

export default RecommendedGroups;
