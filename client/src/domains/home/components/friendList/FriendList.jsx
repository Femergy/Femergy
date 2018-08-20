import React from 'react';
import SearchGrey from "../../../../components/search-grey/Search-grey";

const FriendList = ({ friends, searchValue, searchChange, sendInvite, sendAllInvites }) => {
  return (
    <div className="invite-members">
      <div className="search-wrapper">
        <SearchGrey placeholder="Enter name or email" value={searchValue} onChange={searchChange}/>
      </div>
      <div className="all-contacts">
        <span>{ friends.length } contacts</span>
        <a className='invite-link' onClick={sendAllInvites}>
          invite all
        </a>
      </div>
      <div className="contacts">
        { friends.map((item, index) => (
          <div className={'contact'} key={index}>
            <div className="avatar">
              <span>{item.FirstName[0].toUpperCase()}{item.LastName[0].toUpperCase()}</span>
            </div>
            <span className={'name'}>{item.FirstName} {item.LastName}</span>
            <span className={'email'}>{item.EmailAddress}</span>
            <a className='invite-link' data-index={index} onClick={sendInvite}>invite</a>
          </div>))
        }
      </div>
    </div>
  );
};

export default FriendList;
