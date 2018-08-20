import React from 'react';
import PageCongressView from './PageCongressView';

class PageCongress extends React.Component {
  render() {
    return (
      <PageCongressView {...this.props} />
    );
  }
}

export default PageCongress;
