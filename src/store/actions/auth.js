import * as actionTypes from './actionTypes';
import axios from 'axios';

//action creator for the starting of an auth action which we need to change
//the value of loading to "True" which we need before presenting data(s) to 
//the user ( which can be used to show a Spinner modal).
export const authStart = () =>{
    return{
        type: actionTypes.AUTH_START
    };
};

//action creator which get dispatched when we succeed doing a login request
//here we retrieve the token out from response.data to store it in both
//the Redux Store or browser's localStorage
export const authSuccess = (token) =>{
    return{
        type: actionTypes.AUTH_SUCCESS,
        token: token
    };
};

//action creator where we need to dispatch when we fail at doing login request
// which may then be used to store the error information of error.message to the store
export const authFail = (error) =>{
    return{
        type: actionTypes.AUTH_FAIL,
        error: error.message
    };
};

//action creator upon user logout of the React APP where we do erasing/cleaning
//the token from the localStorage
export const authLogout = () =>{
    localStorage.removeItem('token');
    return{
        type: actionTypes.AUTH_LOGOUT
    };
};

//action creator which handles asynchronous code (before also dispatching synchronous codes in the end)
export const auth = (username, password) =>{
    return dispatch => {
        dispatch(authStart());

        //storing the username & password that user input in a const
        const authData = {
            username: username,
            password: password
        };
        
        axios.post('https://cors-anywhere.herokuapp.com/project-highway.herokuapp.com/user/login', authData)
            .then(response=>{
                //store token that we get back from response data body 
                //afer successfully logged user in
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
        //check whether token is available in localStorage, if it is then we will automatically
        //dispatch user login with the retrieved token
        const token = localStorage.getItem('token');
        if (!token){
            dispatch(authLogout());
        } else {
            dispatch(authSuccess(token));
        }
    }
}

