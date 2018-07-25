import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../CardWithShowMoreBtn/CardWithShowMoreBtn';
import Item from './CompetitionListItem/CompetitionListItem';
import './PitchCompetition.scss';

const testList = [{
    id: 0,
    title: 'Insurcom',
    subTitle: 'Insurance',
    rating: 9.9,
    icon: '/images/placeholders/orgPlaceholder1.jpg',
  }, {
    id: 1,
    title: 'Insurcom',
    subTitle: 'Insurance',
    rating: 9.9,
    icon: '/images/placeholders/orgPlaceholder2.jpg',
  }, {
    id: 2,
    title: 'Insurcom',
    subTitle: 'Insurance',
    rating: 9.9,
    icon: '/images/placeholders/orgPlaceholder3.jpg',
  }, {
    id: 3,
    title: 'Insurcom',
    subTitle: 'Insurance',
    rating: 9.9,
    icon: '/images/placeholders/orgPlaceholder4.jpg',
  }, {
    id: 4,
    title: 'Insurcom',
    subTitle: 'Insurance',
    rating: 9.9,
    icon: '/images/placeholders/orgPlaceholder5.jpg',
  },
];

export default class PitchCompetition extends React.Component {
  static propTypes = {};

  render() {
    return (
      <Card title="Pitch Competition" className="pitch-competition" disabled>
        {testList.map((item, index) => (
          <Item
            item={item}
            index={index + 1}
            key={item.id}
          />
        ))}
      </Card>
    );
  }
}

