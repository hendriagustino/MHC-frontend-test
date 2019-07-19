import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () =>{
    return{
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData) =>{
    return{
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail = (error) =>{
    return{
        type: actionTypes.AUTH_FAIL,
        error: error
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
                console.log(response);
                dispatch(authSuccess(response.data));
            })
            .catch(err=>{
                console.log(err);
                dispatch(authFail(err));
            })
    }
}




 // return Axios({
        //     method: 'POST',
        //     url: `${url}/login`,
        //     header: {
        //     'Content-Type': 'application/json'
        //     },
        //     data: {
        //     'username': username,
        //     'password': password
        //     }
        // })
        // .then( res => {