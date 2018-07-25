import React from 'react';
import './PageContentPlaceholder.scss';

class PageContentPlaceholder extends React.Component {
  render() {
    return (
      <div className="page-content-placeholder">
        <h2 className="page-content-placeholder__title">Coming Soon</h2>
        <p className="page-content-placeholder__text">
          {this.props.children}
        </p>
      </div>
    );
  }
}

export default PageContentPlaceholder;
