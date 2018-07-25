import React from 'react';
import PropTypes from 'prop-types';
import './ToolsPageContent.scss';
import Tool from '../card-tool/Tool';

const ContentView = props => (
  <section className="tools">
    <h2 className="tools__title">Tools Designed for Your Business</h2>
    <p className="tools__welcome-text">
      Femergy strive to create and connect a supportive tools where its
      members can flourish. Let’s begin!
    </p>
    <div className="tools__list">
      {
        props.tools.map(tool => (
          <Tool
            {...tool}
            key={tool.id}
          />
        ))
      }
    </div>
  </section>
);


ContentView.propTypes = () => (
  {
    name: PropTypes.string,
  }
);

export default ContentView;
