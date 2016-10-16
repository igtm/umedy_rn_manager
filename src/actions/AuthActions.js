/**
 * Created by Tomokatsu on 2016/10/15.
 */
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from './types';


export const emailChanged = text => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = text => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
};


// [非同期処理]
// Redux Thunk は　関数がactionとして返されたら、dispatchと共に即実行する。 => dispatchに渡した引数が渡される
export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER}); // 一番最初にまず送る loginを開始した時

        /*
         firebase.auth().signInWithEmailAndPassword(email, password)
         .then(user => loginUserSuccess(dispatch, user))
         .catch((err) => {
         console.log(err);
         firebase.auth().createUserWithEmailAndPassword(email, password)
         .then(user => loginUserSuccess(dispatch, user))
         .catch(() => loginUserFail(dispatch));
         })
         */
        const testEmail = "test@test.com";
        const testPassword = "password";
        setTimeout(function () {
            if(testEmail === email && testPassword === password )
                loginUserSuccess(dispatch, {email, password});
            else
                loginUserFail(dispatch);
        },1000);
    }
};

const loginUserSuccess = (dispatch, user) => {
    console.log('loginUserSuccess');
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    })

    Actions.main();
};
const loginUserFail = (dispatch) => {
    console.log('loginUserFail');
    dispatch({
        type: LOGIN_USER_FAIL
    })

};