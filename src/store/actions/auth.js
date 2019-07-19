import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () =>{
    return{
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token) =>{
    return{
        type: actionTypes.AUTH_SUCCESS,
        token: token
    };
};

export const authFail = (error) =>{
    return{
        type: actionTypes.AUTH_FAIL,
        error: error.message
    };
};

export const authLogout = () =>{
    return{
        type: actionTypes.AUTH_LOGOUT
    };
};

export const auth = (username, password) =>{
    return dispatch => {
        dispatch(authStart());

        const authData = {
            username: username,
            password: password
        };
        
        axios.post('https://cors-anywhere.herokuapp.com/project-highway.herokuapp.com/user/login', authData)
            .then(response=>{
                console.log(response.data);
                console.log(response.data.token);
                dispatch(authSuccess(response.data.token));
            })
            .catch(err=>{
                console.log(err);
                dispatch(authFail(err));
            })
    }
};
