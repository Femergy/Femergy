import React from 'react';
import PropTypes from 'prop-types';
import './CardWithShowMoreBtn.scss';
import Card from '../CardWithTitle/CardWithTitle';
import Button from '../../Controls/Buttons/Button/Button';

export default class CardWithShowMoreBtn extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    className: PropTypes.string,
    title: PropTypes.string,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    title: null,
    className: null,
    disabled: false,
  }

  render() {
    const { title, children, className, disabled } = this.props;
    return (
      <Card title={title} className={`card-with-show-more-btn ${className}`}>
        {children}
        <div className="card-with-show-more-btn__controls">
          <Button color={disabled ? 'disabled' : 'success'} outlined disabled={disabled}>Show More</Button>
        </div>
      </Card>
    );
  }
}
