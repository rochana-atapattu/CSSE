import {login,logout} from "../service/apiReq";
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from "../types";

export function userLogin(username, password){
    return dispatch => {
        dispatch({
            type:LOGIN_REQUEST,
            payload:username
        });

        login(username, password)
            .then(
                user => {
                    dispatch({
                        type:LOGIN_SUCCESS,
                        payload:user
                    });
                    history.push('/');
                },
                error => {
                    dispatch({
                        type:LOGIN_FAILURE,
                        payload:error
                    });
                }
            );
    };
}

export function userLogout(){
    logout();
    return { type:LOGOUT };
}