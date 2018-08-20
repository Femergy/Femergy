import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import PageContentWrapper from "../../../../components/page-content-wrapper/PageContentWrapper";
import InviteFriends from "../invite-friends/InviteFriends";
import FriendList from '../friendList/FriendList';
import ReferalLinkCard from "../../../../components/referal-link-card/ReferalLinkCard";
import JoinComunity from "../../../../components/join-comunity/JoinComunity";
import filteredFriend from '../../../../helpers/homeHelper';
import requestHelper from '../../../../helpers/requestHelper';

import { updateContacts } from "../../../../actions/actions";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    updateContacts
  }, dispatch)
});

const mapStateToProps = state => (
  {
    user: state.rootReducer.user,
    contacts: state.rootReducer.importedContacts.contacts
  }
);

class Content extends React.Component {


  state = {
    inputValue: ''
  };

  searchChange = (e) => {
    this.setState({
      searchValue: e.currentTarget.value
    })
  };

  sendInvite = (e) => {
    const { actions, contacts } = this.props;
    const updatedContacts = [].concat(contacts);
    const user = updatedContacts.splice(e.currentTarget.dataset.index, 1);

    requestHelper.sendInvite(user, {action: actions.updateContacts, updatedContacts});
  };

  sendAllInvites = () => {
    const { actions, contacts } = this.props;
    actions.updateContacts({data: []});
    requestHelper.sendInvite(contacts, {action: actions.updateContacts, updatedContacts: []});

  };

  render() {
    const { contacts } = this.props;
    const { searchValue }  = this.state;
    const friends = filteredFriend(contacts, searchValue);

    return (
      <PageContentWrapper>
        <h2 className="home__title">Welcome to Femergy!</h2>
        <p className="home__welcome-text">
          Femergy is a global business network and business accelerator that rewards and rates
          content creators, curators, and every community member who has a positive growth
          impact of the Femergy platform.
        </p>
        <p className="home__welcome-text">
          Start building your business network with the help of your friends. Invite them via Personal Referral Link and Earn 10.00 FEM tokens once a friend signs up and verifies their account.
        </p>
        { contacts.length ?
          <FriendList
            friends={ friends }
            searchChange={ this.searchChange }
            searchValue={ searchValue }
            sendInvite={ this.sendInvite }
            sendAllInvites={ this.sendAllInvites }
          /> :
          <InviteFriends />
        }
        <ReferalLinkCard />
        <JoinComunity />
      </PageContentWrapper>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);
