import axios from 'axios'
import {
    LOGIN,
    LOGIN_OK,
    LOGIN_FAIL
} from './actionTypes'

//DOING LOGIN:

export function actionDoLogin(){
    return {
        type: LOGIN
    }
}

export function actionDoLoginOk(userProfile){
    return {
        type: LOGIN_OK,
        payload: userProfile
    }
}

export function actionDoLoginFail(error){
    return {
        type: LOGIN_FAIL,
        payload: error
    }
}

export function doLogin(dataUser){
    return async(dispatch) => {
        dispatch(actionDoLogin(dataUser))
        try {
            const res = await axios.post("");
            dispatch(actionDoLoginOk())
        } catch (error) {
            dispatch(actionDoLoginFail(error))
        }
    }
}