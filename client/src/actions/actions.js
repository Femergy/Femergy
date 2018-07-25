import {
  constants
} from '../constants';

export const toSignin = () => ({type: constants.SIGN_IN});
export const toSignup = () => ({type: constants.SIGN_UP});
export const notValidAuthForm = () => ({type: constants.NOT_VALID_AUTH_FORM_STATE});
export const isValidPasswords = (payload) => {
  return {type: constants.IS_VALID_PASSWORDS, payload}
};
export const okState = () => ({type: constants.OK_STATE});
export const forgotPassword = () => ({type: constants.FORGOT_PASSWORD});
export const remindSent = () => ({type: constants.REMIND_SENT});
export const setUser = user => ({type: constants.SET_USER, user});
export const setBonuses = bonuses => ({type: constants.SET_BONUSES, bonuses});
export const updateUser = user => ({type: constants.UPDATE_USER, user});

export const login = data => ({type: constants.LOGIN, data});
export const logout = () => ({type: constants.LOGOUT});

export const setReferer = referer => ({type: constants.SET_REFERER, referer});
export const setAsReferal = (referer, referal) => ({type: constants.SET_AS_REFERAL, referer, referal});

export const openImportLnWindow = pageFrom => ({type: constants.OPEN_IMPORT_LN_WINDOW, pageFrom});
export const close = () => ({type: constants.CLOSE});

