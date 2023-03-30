import axios from "axios";
import {
  LOGIN,
  LOGIN_OK,
  LOGIN_FAIL,
  DO_LOGUT,
  DO_LOGUT_OK,
  DO_LOGUT_FAIL,
} from "./actionTypes";

//DOING LOGIN:

export function actionDoLogin() {
  return {
    type: LOGIN,
  };
}

export function actionDoLoginOk(userProfile) {
  return {
    type: LOGIN_OK,
    payload: userProfile,
  };
}

export function actionDoLoginFail(error) {
  return {
    type: LOGIN_FAIL,
    payload: error,
  };
}

export function doLogin(dataUser) {
  return async (dispatch) => {
    dispatch(actionDoLogin(dataUser));
    try {
      const res = await axios.post(
        "https://dummyjson.com/auth/login",
        dataUser
      );
      dispatch(actionDoLoginOk(res.data));
    } catch (error) {
      dispatch(actionDoLoginFail(error));
    }
  };
}

//LOGOUT

export function actionDoLogout() {
  return {
    type: DO_LOGUT,
  };
}

export function actionDoLogoutOk() {
  return {
    type: DO_LOGUT_OK,
  };
}

export function actionDoLogoutFail(error) {
  return {
    type: DO_LOGUT_FAIL,
    payload: error,
  };
}

export function doLogout() {
  return (dispatch) => {
    try {
      dispatch(actionDoLogout());
      dispatch(actionDoLogoutOk());
    } catch (error) {
      dispatch(actionDoLoginFail(error));
    }
  };
}
