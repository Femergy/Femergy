import React from 'react';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { notify } from 'react-notify-toast';
import './ReferalLink.scss';
import Note from '../note/Note';

const mapStateToProps = state => ({
  referalLink: state.rootReducer.referalLink,
});


class ReferalLink extends React.Component {
  constructor(props) {
    super(props);
    this.copyLink = this.copyLink.bind(this);
  }

  copyLink(e) {
    e.preventDefault();
    notify.show('Link copied to the clipboard','success', 2500);
  }

  render() {
    return (
      <CopyToClipboard text={this.props.referalLink}>
        <button className="referal-link" onClick={this.copyLink}>
          {this.props.referalLink}
        </button>
      </CopyToClipboard>
    );
  }
}

export default connect(mapStateToProps)(ReferalLink);
