import Cookie from 'js-cookie';

class StorageHelper {
  constructor() {
    this.storage = window.localStorage;
  }

  set referer(referer) {
    this.storage.setItem('referer', referer);
  }

  get referer() {
    return this.storage.getItem('referer');
  }

  removeReferer() {
    this.storage.removeItem('referer');
  }

  get user() {
    const user = this.storage.getItem('user') && JSON.parse(this.storage.getItem('user'));
    return user;
  }

  get token() {
    return {
      access: this.storage.getItem('accessToken'),
      refresh: this.storage.getItem('refreshToken'),
      expiresIn: this.storage.getItem('expiresIn'),
    };
  }

  get isVerified() {
    return this.storage.getItem('emailVerified') === 'verified';
  }

  updateUser(user) {
    this.storage.setItem('user', JSON.stringify(user));
  }

  setData(data) {
    this.storage.setItem('user', JSON.stringify(data.user));
    this.storage.setItem('refreshToken', data.refreshToken);
    this.storage.setItem('accessToken', data.accessToken);
    this.storage.setItem('expiresIn', data.expiresIn);
    if (data.isVerified) {
      this.storage.setItem('emailVerified', 'verified');
    }
  }

  removeData() {
    this.storage.removeItem('user');
    this.storage.removeItem('refreshToken');
    this.storage.removeItem('accessToken');
    this.storage.removeItem('expiresIn');
    this.storage.removeItem('emailVerified');
    this.storage.removeItem('referer');
  }

  setDataFromCookie(cookieName) {
    if (Cookie.get(cookieName)) {
      this.setData(JSON.parse(Cookie.get(cookieName)).data);
      Cookie.remove(cookieName);
    }
  }
}

const storageHelper = new StorageHelper();

export default storageHelper;
