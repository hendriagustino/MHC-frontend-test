import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getAllPersonnelStart = (token) =>{
    return{
        type: actionTypes.GET_ALL_PERSONNEL_START
    }
}

export const getAllPersonnelSuccess = (personnel) =>{
    return{
        type: actionTypes.GET_ALL_PERSONNEL_SUCCESS,
        personnel: personnel
    };
};

export const getAllPersonnelFail = (error) =>{
    return {
        type: actionTypes.GET_ALL_PERSONNEL_FAIL,
        error: error.message
    };
};

export const getAllPersonnel = token =>{
    return dispatch => {
        dispatch(getAllPersonnelStart());

        const headers = {
            Authorization: token
        };

        axios.get('https://cors-anywhere.herokuapp.com/project-highway.herokuapp.com/personnel',
                    {headers}
                )
            .then(response=>{
                dispatch(getAllPersonnelSuccess(response.data.data));
            })
            .catch(err=>{
                console.log(err.response);
                dispatch(getAllPersonnelFail(err));
            })
    }
};
