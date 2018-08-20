import React from 'react';
import Connects from '../Connects/Connects';

const testList = [{
  title: 'Company name',
  market: 'market',
  joined: '03/17',
  location: 'location',
  employees: '11-50',
  icon: '/images/placeholders/orgPlaceholder1.jpg',
}, {
  title: 'Company name',
  market: 'market',
  joined: '03/17',
  location: 'location',
  employees: '11-50',
  icon: '/images/placeholders/orgPlaceholder2.jpg',
}, {
  title: 'Company name',
  market: 'market',
  joined: '03/17',
  location: 'location',
  employees: '11-50',
  icon: '/images/placeholders/orgPlaceholder3.jpg',
}, {
  title: 'Company name',
  market: 'market',
  joined: '03/17',
  location: 'location',
  employees: '11-50',
  icon: '/images/placeholders/orgPlaceholder4.jpg',
}, {
  title: 'Company name',
  market: 'market',
  joined: '03/17',
  location: 'location',
  employees: '11-50',
  icon: '/images/placeholders/orgPlaceholder5.jpg',
}];

export default class InvestorsConnects extends React.Component {
  render() {
    return (
      <Connects
        title="Investors Connects"
        data={testList}
      />
    );
  }
}
