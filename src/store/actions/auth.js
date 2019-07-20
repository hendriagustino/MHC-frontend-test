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
    localStorage.removeItem('token');
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
                localStorage.setItem('token',response.data.token);
                dispatch(authSuccess(response.data.token));
            })
            .catch(err=>{
                console.log(err);
                dispatch(authFail(err));
            })
    }
};

export const authTokenCheck = () =>{
    return dispatch =>{
        const token = localStorage.getItem('token');
        if (!token){
            dispatch(authLogout());
        } else {
            dispatch(authSuccess(token));
        }
    }
}

