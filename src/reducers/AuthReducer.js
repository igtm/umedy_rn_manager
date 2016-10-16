/**
 * Created by Tomokatsu on 2016/10/15.
 */
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

// slice of state (globalのstateではない！！) state.auth のこと
export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload }; // 前のstateをmutateしてreturnしても同じobjectだから、変更が無かったと判定されてrerenderされない！
        case PASSWORD_CHANGED:
            return {...state, password: action.payload };
        case LOGIN_USER:
            return {...state, loading: true, error: ''};
        case LOGIN_USER_SUCCESS:
            return {...state,
                ...INITIAL_STATE,
                user: action.payload
            };
        case LOGIN_USER_FAIL:
            return {...state,
                error: 'Auth error!',
                password: '',
                loading: false
            };
        default:
            return state;
    }
}