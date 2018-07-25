import React from 'react';
import Card from '../Cards/Card/Card';
import Search from '../search/Search';
import Group from '../card-group/Group';
import './GroupsList.scss';

const GroupsListView = props => (
  <Card className="groups-list__card">
    <Search className="search--gray" />
    <h2 className="groups-list__title">{props.groups.length} groups found</h2>
    <div className="groups-list__list">
      {
        props.groups.map(group => (
          <Group
            {...group}
            key={group.id}
            btnText="Join Group"
          />
        ))
      }
    </div>
  </Card>
);

export default GroupsListView;
