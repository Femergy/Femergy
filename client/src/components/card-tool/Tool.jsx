import React from 'react';
import PropTypes from 'prop-types';
import ToolView from './ToolView';

class Tool extends React.Component {
  static get propTypes() {
    return {
      title: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.string,
      image: PropTypes.string,
      rating: PropTypes.number,
      rewiews: PropTypes.array,
    };
  }

  static get defaultProps() {
    return {
      title: 'default title',
      description: 'default description',
      link: '',
      image: '#',
      rating: 0,
      rewiews: [],
    };
  }

  render() {
    return (
      <ToolView {...this.props} />
    );
  }
}

export default Tool;
