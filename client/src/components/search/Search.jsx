import React from 'react';
import PropTypes from 'prop-types';
import SearchView from './SearchView';

class Search extends React.Component {
  static get propTypes() {
    return {
      placeholder: PropTypes.string,
      style: PropTypes.object,
      className: PropTypes.string,
      disabled: PropTypes.bool,
    };
  }

  static get defaultProps() {
    return {
      placeholder: 'Search',
      style: {},
      className: '',
      disabled: false,
    };
  }

  render() {
    return (
      <SearchView {...this.props} />
    );
  }
}

export default Search;
