const filteredFriend = (contacts, searchValue) => {

  if (!searchValue) {
    return contacts;
  }

  return [].concat(contacts).filter((item) => {

    const search = searchValue.toLocaleLowerCase();
    const firstName = item.FirstName.toLocaleLowerCase().indexOf(search) !== -1;
    const lastName = item.LastName.toLocaleLowerCase().indexOf(search) !== -1;
    const emailAddress = item.EmailAddress.toLocaleLowerCase().indexOf(search) !== -1;

    if (firstName) {
      return true;
    }
    if (lastName) {
      return true;
    }
    if (emailAddress) {
      return true;
    }
    return false;
  });
};

export default filteredFriend;
