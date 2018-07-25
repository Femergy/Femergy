import React from 'react';
import PropTypes from 'prop-types';
import './PageContentWrapper.scss';

class PageContentWrapper extends React.Component {
  static get propTypes() {
    return {
      className: PropTypes.string,
      children: PropTypes.object,
    };
  }

  static get defaultProps() {
    return {
      className: '',
      children: <p>default page content</p>,
    };
  }

  render() {
    return (
      <div className={`page-content-wrapper ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

export default PageContentWrapper;
