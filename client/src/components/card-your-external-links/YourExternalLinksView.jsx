import React from 'react';
import PropTypes from 'prop-types';
import './YourExternalLinks.scss';

const YourExternalLinksView = props => (
  <section className="your-external-links">
    <h2 className="your-external-links__title">Your External Links</h2>
    <div className="your-external-links__list">
      {
        props.links.map(link => (
          <div key={link.id} className="your-external-links__link--wrapper">
            <label className="your-external-links__link-label" htmlFor={link.id}>{link.title}</label>
            <input className="your-external-links__link-input" type="text" id={link.id} placeholder={link.placeholder} />
          </div>))
      }
      <div className="your-external-links__btn--wrapper">
        <button className="your-external-links__save-btn">
          Save
        </button>
      </div>
    </div>
  </section>
);

YourExternalLinksView.propTypes = () => (
  {
    cards: PropTypes.array,
  }
);

export default YourExternalLinksView;
