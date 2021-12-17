import { userConstants } from '../consts';

let info = JSON.parse(localStorage.getItem('user'));
const initialState = info ? { loggedIn: true, info } : {
    loggedIn:false,
    info
};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: false,
                user: action.info
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.info
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {
                loggedIn: false,
            };
        default:
            return state
    }
}