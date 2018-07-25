import React from 'react';
import { connect } from 'react-redux';
import ImportLnContactsWindowView from './ImportLnContactsWindowView';

const mapStateToProps = state => (
  {
    isAuth: state.rootReducer.isAuthenticated,
  }
);

class ImportLnContactsWindow extends React.Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.save = this.save.bind(this);
  }

  close() {
    window.history.back();
  }

  save() {
    console.log('save click');
  }

  render() {
    return (
      <ImportLnContactsWindowView {...this.props} onClose={this.close} onSave={this.save} />
    );
  }
}

export default connect(mapStateToProps)(ImportLnContactsWindow);
