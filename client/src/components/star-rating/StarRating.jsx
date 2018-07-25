import React from 'react';
import PropTypes from 'prop-types';
import StarRatingFull from './StarRatingFull';
import StarRatingMini from './StarRatingMini';

class StarRating extends React.Component {
  static propTypes = {
    mini: PropTypes.bool,
  };

  static defaultProps = {
    mini: false,
  }

  render() {
    const { mini } = this.props;
    return (
      <React.Fragment>
        {mini ? 
        <StarRatingMini {...this.props} /> : 
        <StarRatingFull {...this.props} />}
      </React.Fragment>
    );
  }
}

export default StarRating;
