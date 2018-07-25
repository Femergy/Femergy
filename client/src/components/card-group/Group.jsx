import React from 'react';
import PropTypes from 'prop-types';
import './Group.scss';

class Group extends React.Component {
  static get propTypes() {
    return {
      title: PropTypes.string,
      subTitle: PropTypes.string,
      description: PropTypes.string,
      icon: PropTypes.string,
      btnText: PropTypes.string,
      isVerified: PropTypes.bool,
      onClick: PropTypes.func,
      disabled: PropTypes.bool,
    };
  }

  static get defaultProps() {
    return {
      title: 'default group',
      subTitle: 'default sub title',
      description: 'default description',
      icon: '',
      btnText: 'Click',
      isVerified: false,
      onClick: () => console.log('group btn click'),
      disabled: false,
    };
  }

  render() {
    return (
      <section className="group-card">
        <div className={`group-card__image-wrapper ${this.props.icon && 'group-card__with-icon'}`}>
          { this.props.icon && <img className="group-card__image" src={this.props.icon} alt={this.props.title} /> }
          { this.props.isVerified && <div className="group-card__is-verified" /> }
        </div>
        <h3 className="group-card__title">{this.props.title}</h3>
        <p className="group-card__sub-title">{this.props.subTitle}</p>
        <p className="group-card__description">{this.props.description}</p>
        <div className="group-card__btn-wrapper">
          <button
            className={`group-card__btn ${this.props.disabled && 'group-card__btn-disabled'}`}
            onClick={this.props.onClick}
            disabled={this.props.disabled}
          >
            {this.props.btnText}
          </button>
        </div>
      </section>
    );
  }
}

export default Group;
