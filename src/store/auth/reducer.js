import {
  LOGIN,
  LOGIN_OK,
  LOGIN_FAIL,
  DO_LOGUT,
  DO_LOGUT_OK,
} from "./actionTypes";

function recoverUser() {
  try {
    return JSON.parse(localStorage.getItem("_user"));
  } catch (fail) {
    return {};
  }
}

const initialState = {
  user: recoverUser(),
  loadingUser: false,
  error: {
    message: "",
  },
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      state = { ...state, loadingUser: true };
      break;
    case LOGIN_OK:
      state = { ...state, loadingUser: false, user: action.payload };
      break;
    case LOGIN_FAIL:
      state = {
        ...state,
        loadingUser: false,
        user: {},
        error: { message: action.payload },
      };
      break;
    case DO_LOGUT:
      state = { ...state };
      break;
    case DO_LOGUT_OK:
      state = { ...state, user: {} };
      break;
    default:
      break;
  }
  return state;
}
