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

        //fetching all data (getAll Personnel) from the API
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

export const getPersonnelStart = (token) =>{
    return{
        type: actionTypes.GET_PERSONNEL_START
    };
};

export const getPersonnelSuccess = (personnel) =>{
    return{
        type: actionTypes.GET_PERSONNEL_SUCCESS,
        personnel: personnel
    };
};

export const getPersonnelFail = (error) =>{
    return {
        type: actionTypes.GET_PERSONNEL_FAIL,
        error: error.message
    };
};

export const getPersonnelErase = () =>{
    return {
        type: actionTypes.GET_PERSONNEL_ERASE
    };
};

export const getPersonnel = (token, id) =>{
    return dispatch => {
        dispatch(getPersonnelStart());

        const headers = {
            Authorization: token
        };
        
        //fetching data for one specific Personnel object which the user clicked onto through the Personnel view table page
        axios.get('https://cors-anywhere.herokuapp.com/project-highway.herokuapp.com/personnel/' + id,
                    {headers}
                )
            .then(response=>{
                dispatch(getPersonnelSuccess(response.data.data));
            })
            .catch(err=>{
                console.log(err.response);
                dispatch(getPersonnelFail(err));
            })
    }
};
//////////////////////////////////////////////////////////

export const deletePersonnelStart = (token) =>{
    return{
        type: actionTypes.DELETE_PERSONNEL_START
    };
};

export const deletePersonnelSuccess = () =>{
    return{
        type: actionTypes.DELETE_PERSONNEL_SUCCESS
    };
};

export const deletePersonnelFail = (error) =>{
    return {
        type: actionTypes.DELETE_PERSONNEL_FAIL,
        error: error.message
    };
};

export const deletePersonnel = (token, id) =>{
    return dispatch => {
        dispatch(deletePersonnelStart());

        const headers = {
            Authorization: token
        };

        //sending API request to delete one specific Personnel object 
        axios.delete('https://cors-anywhere.herokuapp.com/project-highway.herokuapp.com/personnel/' + id,
                    {headers}
                )
            .then(response=>{
                dispatch(getAllPersonnel(token));
                dispatch(deletePersonnelSuccess());
            })
            .catch(err=>{
                console.log(err.response);
                dispatch(deletePersonnelFail(err));
            })
    }
};