import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import requestHelper from '../../helpers/requestHelper';
import { setContacts } from "../../actions/actions";
import ImportLnContactsWindowView from './ImportLnContactsWindowView';

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    setContacts
  }, dispatch)
});
const mapStateToProps = state => (
  {
    isAuth: state.rootReducer.isAuthenticated,
    file: state.rootReducer.importedContacts.zipFile,
    isDisabled: !!!state.rootReducer.importedContacts.zipFile,
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
    const { file, actions } = this.props;
    requestHelper.getContacts({ file }, actions.setContacts);
  }

  render() {
    return (
      <ImportLnContactsWindowView {...this.props} onClose={this.close} onSave={this.save} isDisabled={this.props.isDisabled}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImportLnContactsWindow);
