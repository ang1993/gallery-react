import {
    LOGIN,
    LOGIN_OK,
    LOGIN_FAIL
} from './actionTypes'

const initialState = {
    user: {},
    loadingUser: false,
    error: {
        message: ""
    }
}

export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            state = {...state, loadingUser: true}
            break;
        case LOGIN_OK:
            state = {...state, loadingUser: false, user: action.payload}
            break;
        case LOGIN_FAIL:
            state = {...state, loadingUser: false, user: {}, error:{message: action.payload}}
            break;
        default:
            break;
    }
    return state
}