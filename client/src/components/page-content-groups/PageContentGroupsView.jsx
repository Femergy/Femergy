import React from 'react';
import './PageContentGroups.scss';
import PageContentWrapper from '../page-content-wrapper/PageContentWrapper';
import GroupsList from '../card-groups-list/GroupsList';

const ContentView = props => (
  <PageContentWrapper>
    <GroupsList />
  </PageContentWrapper>
);

export default ContentView;
