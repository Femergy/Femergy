import React from 'react';
import './Form.scss';

class Form extends React.Component {
  static get propTypes() {
    return {
      className: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      className: '',
    };
  }

  render() {
    return (
      <form className={`cards-form ${this.props.className}`} onSubmit={this.props.onSubmit}>
        {this.props.children}
      </form>
    );
  }
}

export default Form;
