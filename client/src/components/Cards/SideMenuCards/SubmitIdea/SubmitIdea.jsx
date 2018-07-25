import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../Card/Card';
import MiniCard from '../../ItemCards/MiniCard/MiniCard';
import './SubmitIdea.scss';

export default class SubmitIdea extends React.Component {
  static propTypes = {};

  render() {
    return (
      <Card className="submit-idea">
        <MiniCard
          className="submit-idea__mini-card"
          title="Submit Your Idea"
          icon="/images/ic-idea.svg"
          subTitle="Sed ut perspiciatis unde omnis"
          disabled
        />
      </Card>
    );
  }
}

