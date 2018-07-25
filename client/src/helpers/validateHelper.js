import validateJs from 'validate.js';

class Validate {
  constructor() {
    this.nameConstraints = { format: { pattern: /([A-Za-z-]+) ([A-Za-z-]+)/ } };
    this.emailConstraints = { email: true };
    this.usernameConstraints = { length: { maximum: 30 } };
    this.bioConstraints = { length: { maximum: 150 } };
    this.locationConstraints = { length: { maximum: 30 } };
  }

  email(email) {
    return !validateJs.single(email, this.emailConstraints);
  }

  name(name) {
    return !validateJs.single(name, this.nameConstraints);
  }

  username(username) {
    return !validateJs.single(username, this.usernameConstraints);
  }

  bio(bio) {
    return !validateJs.single(bio, this.bioConstraints);
  }

  location(location) {
    return !validateJs.single(location, this.locationConstraints);
  }
}

const validate = new Validate();

export default validate;
