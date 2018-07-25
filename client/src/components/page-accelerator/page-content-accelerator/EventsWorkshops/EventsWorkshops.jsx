import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../Cards/CardWithTitle/CardWithTitle';
import ItemCard from '../../../Cards/ItemCards/ItemCard/ItemCard';
import './EventsWorkshops.scss';

const testList = [{
  id: 0,
  title: 'Business Excellence for Women',
  subTitle: 'Online Workshop ',
  image: '/images/placeholder.jpg',
  date: Date.now(),
  disabled: true,
}, {
  id: 1,
  title: 'Entrepreneurship and Practice',
  subTitle: 'Online Workshop ',
  image: '/images/placeholder.jpg',
  date: Date.now(),
  disabled: true,
}, {
  id: 2,
  title: 'Business Foundation',
  subTitle: 'Online Workshop ',
  image: '/images/placeholder.jpg',
  date: Date.now(),
  disabled: true,
}];

export default class EventsWorkshops extends React.Component {
  static propTypes = {};

  render() {
    return (
      <Card title="Events & Workshops" className="events-workshops">
        {testList.map(item => (
          <ItemCard
            {...item}
            key={item.id}
          />
        ))}
      </Card>
    );
  }
}

