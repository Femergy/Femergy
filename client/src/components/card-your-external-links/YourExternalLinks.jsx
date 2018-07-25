import React from 'react';
import YourExternalLinksView from './YourExternalLinksView';

const linksList = [
  {
    id: 'You_External_Links_Facebook',
    title: 'Facebook',
    placeholder: 'Paste your link here',
  },
  {
    id: 'You_External_Links_Twitter',
    title: 'Twitter',
    placeholder: 'Paste your link here',
  },
  {
    id: 'You_External_Links_Google',
    title: 'Google +',
    placeholder: 'Paste your link here',
  },
  {
    id: 'You_External_Links_Linkedin',
    title: 'Linkedin',
    placeholder: 'Paste your link here',
  },
  {
    id: 'You_External_Links_Website',
    title: 'Website',
    placeholder: 'Paste your link here',
  },
];

class YourExternalLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { links: linksList };
  }

  render() {
    return (
      <YourExternalLinksView {...this.props} links={this.state.links} />
    );
  }
}

export default YourExternalLinks;
