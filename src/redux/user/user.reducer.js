import { UserActionTypes } from './user.types';

const initialState = {
    currentUser: null,
    error: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                error: null,
                currentUser: action.payload
            }
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                error: null,
                currentUser: null
            }
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;