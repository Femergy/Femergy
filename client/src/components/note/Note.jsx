import React from 'react';
import {notify} from "react-notify-toast";

class Note extends React.Component {
  static success(msg) {
    notify.show(msg || 'Ok', 'success', 2500);
  }

  static error(msg) {
    notify.show(msg || 'Something goes wrong', 'error', 2500);
  }
}

export default Note;
