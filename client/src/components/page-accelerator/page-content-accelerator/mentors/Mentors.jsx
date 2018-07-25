import React from 'react';
import ItemCard from '../../../Cards/ItemCards/VerticalCard/VerticalCard';
import Card from '../../../Cards/CardWithShowMoreBtn/CardWithShowMoreBtn';
import Button from '../../../Controls/Buttons/Button/Button';
import './Mentors.scss';

const testList = [{
    id: 0,
    title: "user name",
    subTitle: 'user company',
    icon: '/images/placeholders/photoPlaceholder1.jpg',
  }, {
    id: 1,
    title: "user name",
    subTitle: 'user company',
    icon: '/images/placeholders/photoPlaceholder2.jpg',
  }, {
    id: 2,
    title: "user name",
    subTitle: 'user company',
    icon: '/images/placeholders/photoPlaceholder3.jpg',
  }, {
    id: 3,
    title: "user name",
    subTitle: 'user company',
    icon: '/images/placeholders/photoPlaceholder4.jpg',
  }, {
    id: 4,
    title: "user name",
    subTitle: 'user company',
    icon: '/images/placeholders/photoPlaceholder5.jpg',
}];

export default class Mentors extends React.Component {
  render() {
    return (
      <div className="mentors">
        <header className="mentors__header">
          <h2 className="mentors__title">Mentors</h2>
          <div>
            <Button color="disabled" outlined className="mentors__btn">
              Become a Mentor
            </Button>
            <Button color="disabled" className="mentors__btn">
              Apply for a Mentor
            </Button>
          </div>
        </header>
        <Card className="mentors__card" disabled>
          <div className="mentors__list">
            {testList.map(item => (
              <ItemCard
                item={item}
                key={item.id}
              />
            ))}
          </div>
        </Card>
      </div>
    );
  }
}
