import React from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFile } from "../../actions/actions";
import { notify } from 'react-notify-toast';
import './DropZone.scss';
const mapStateToProps = state => ({
  isValid: state.rootReducer.importedContacts.isValidFile
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    setFile
  }, dispatch)
});

class DropZone extends React.Component {

  onDrop = (files) => {
    const file = files[0];
    if (file.type.split('/')[1] === 'zip' && file.size / 1000000 < 1) {
      notify.show('File is valid', 'success', 1000);
      this.props.actions.setFile({ file, isValidZone: 'validDropZone' });
    } else {
      notify.show('File is not valid', 'error', 1000);
      this.props.actions.setFile({ file: null, isValidZone: 'invalidDropZone' });
    }
  };

  render() {

    return (
      <Dropzone onDrop={this.onDrop} className="drop-zone" >
        <div className={`drop-zone ${this.props.isValid}`}>
          <img className="drop-zone__cloud" src="/images/cloud.svg" alt="cloud img" />
          <p className="drop-zone__text">Drag & Drop file here or <span className="marked-underlined">browse</span> to upload</p>
        </div>
      </Dropzone>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropZone);
