import React from 'react';
import PageContentWrapper from '../../page-content-wrapper/PageContentWrapper';
import CorporativeConnects from './corporative-connects/CorporativeConnects';
import InvestorsConnects from './InvestorsConnects/InvestorsConnects';
import Mentors from './mentors/Mentors';
import EventsWorkshops from './EventsWorkshops/EventsWorkshops';

class Content extends React.Component {
  render() {
    return (
      <PageContentWrapper>
        <Mentors />
        <CorporativeConnects />
        <InvestorsConnects />
        <EventsWorkshops />
      </PageContentWrapper>
    );
  }
}

export default Content;