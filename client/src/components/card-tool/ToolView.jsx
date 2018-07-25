import React from 'react';
import './Tool.scss';
import StarRating from '../star-rating/StarRating';

const ToolView = props => (
  <div className="tool">
    <div className="tool__release-status">
      Coming Soon
    </div>
    <div className="tool__body">
      <div className="tool__icon--wrapper">
        <img src={props.image} alt="tool's icon" />
      </div>
      <div className="tool__text--wrapper">
        <div className="tool__header">
          <h3 className="tool__title">{props.title}</h3>
          <StarRating rating={props.rating} />
        </div>
        <div className="tool__description">
          {props.description}
        </div>
        <a className="tool__link" href={props.link}>
          {props.link}
        </a>
      </div>
    </div>
    <div className="tool__footer">
      <button className="tool__comments">
        <img src="/images/review.svg" alt="show reviews" />{props.rewiews.length} reviews
      </button>
      <div className="tool__is-connected">
        <img src="/images/brokenLink.svg" alt="is tool connected" /> Not Connected
      </div>
    </div>
  </div>
);

export default ToolView;
