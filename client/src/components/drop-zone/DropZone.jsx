import React from 'react';
import Dropzone from 'react-dropzone';
import './DropZone.scss';

class DropZone extends React.Component {
  onDrop() {
    console.log('drop');
  }

  render() {
    return (
      <Dropzone onDrop={this.onDrop.bind(this)} className="drop-zone">
        <div className="drop-zone">
          <img className="drop-zone__cloud" src="/images/cloud.svg" alt="cloud img" />
          <p className="drop-zone__text">Drag & Drop file here or <span className="marked-underlined">browse</span> to upload</p>
        </div>
      </Dropzone>
    );
  }
}

export default DropZone;
