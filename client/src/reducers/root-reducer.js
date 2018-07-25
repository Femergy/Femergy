import axios from 'axios';
import { constants } from '../constants';
import storageHelper from '../helpers/storageHelper';
import requestHelper from '../helpers/requestHelper';
import reducerHelper from '../helpers/reducerHelper';

storageHelper.setDataFromCookie('auth-activate');
storageHelper.setDataFromCookie('auth-social');

const isAuthenticated = !!storageHelper.user;
const user = isAuthenticated ? storageHelper.user : null;
const token = isAuthenticated ? storageHelper.token : null;
const isVerified = isAuthenticated ? storageHelper.isVerified : false;
const referalLink = isAuthenticated ? `${constants.SERVER}/${constants.AUTH_PAGE}/${storageHelper.user.id}` : null;
const { referer } = storageHelper;

if (token) { axios.defaults.headers.common['Authorization'] = `JWT ${token.access}`; }
axios.defaults.baseURL = constants.SERVER;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';

const initialState = {
  isAuthenticated,
  user,
  isVerified,
  token,
  referalLink,
  referer,
  feedPosts: [],
  bonuses: 0,
  pageState: constants.OK_STATE,
  page: {
    current: constants.AUTH_PAGE,
    stage: constants.SIGN_IN,
  },
  isValidPasswords: true
};

const rootReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case constants.SIGN_IN:
      newState.page.stage = constants.SIGN_IN;
      break;
    case constants.SIGN_UP:
      newState.page.stage = constants.SIGN_UP;
      break;
    case constants.NOT_VALID_AUTH_FORM_STATE:
      newState.pageState = constants.NOT_VALID_AUTH_FORM_STATE;
      break;
    case constants.IS_VALID_PASSWORDS:
      newState.isValidPasswords = action.payload;
      break;
    case constants.OK_STATE:
      newState.pageState = constants.OK_STATE;
      break;
    case constants.FORGOT_PASSWORD:
      newState.page.stage = constants.FORGOT_PASSWORD;
      break;
    case constants.REMIND_SENT:
      newState.page.stage = constants.REMIND_SENT;
      break;
    case constants.LOGIN:
      newState = reducerHelper.setLoginState(newState, storageHelper, action.data);
      break;
    case constants.LOGOUT:
      newState = reducerHelper.setLogoutState(newState, storageHelper);
      newState.page.stage = constants.SIGN_IN;
      break;
    case constants.UPDATE_USER:
      storageHelper.updateUser(action.user);
      newState.user = action.user;
      break;
    case constants.SET_REFERER:
      storageHelper.referer = action.referer;
      newState.referer = action.referer;
      break;
    case constants.SET_BONUSES:
      newState.bonuses = action.bonuses;
      break;
    case constants.SET_AS_REFERAL:
      requestHelper.setAsReferal({ referer: action.referer, referal: action.referal }, () => {
        newState.user.isNewUser = false;
        storageHelper.removeReferer();
      });
      break;
    default:
      break;
  }
  return newState;
};

export default rootReducer;
