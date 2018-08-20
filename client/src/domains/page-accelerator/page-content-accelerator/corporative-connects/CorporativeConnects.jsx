import React from 'react';
import Connects from '../Connects/Connects';

const testList = [{
  id: 0,
  title: 'Company name',
  market: 'market',
  joined: '03/17',
  location: 'location',
  employees: '11-50',
  icon: '/images/placeholders/orgPlaceholder1.jpg',
}, {
  id: 1,
  title: 'Company name',
  market: 'market',
  joined: '03/17',
  location: 'location',
  employees: '11-50',
  icon: '/images/placeholders/orgPlaceholder2.jpg',
}, {
  id: 2,
  title: 'Company name',
  market: 'market',
  joined: '03/17',
  location: 'location',
  employees: '11-50',
  icon: '/images/placeholders/orgPlaceholder3.jpg',
}, {
  id: 3,
  title: 'Company name',
  market: 'market',
  joined: '03/17',
  location: 'location',
  employees: '11-50',
  icon: '/images/placeholders/orgPlaceholder4.jpg',
}, {
  id: 4,
  title: 'Company name',
  market: 'market',
  joined: '03/17',
  location: 'location',
  employees: '11-50',
  icon: '/images/placeholders/orgPlaceholder5.jpg',
}];


class CorporativeConnects extends React.Component {
  render() {
    return (
      <Connects
        title="Corporative Connects"
        data={testList}
      />
    );
  }
}

export default CorporativeConnects;
