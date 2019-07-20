import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getAllFacilityStart = (token) =>{
    return{
        type: actionTypes.GET_ALL_FACILITY_START
    }
}

export const getAllFacilitySuccess = (facility) =>{
    return{
        type: actionTypes.GET_ALL_FACILITY_SUCCESS,
        facility: facility
    };
};

export const getAllFacilityFail = (error) =>{
    return {
        type: actionTypes.GET_ALL_FACILITY_FAIL,
        error: error.message
    };
};

export const getAllFacility = token =>{
    return dispatch => {
        dispatch(getAllFacilityStart());

        const headers = {
            Authorization: token
        };

        axios.get('https://cors-anywhere.herokuapp.com/project-highway.herokuapp.com/facility',
                    {headers}
                )
            .then(response=>{
                dispatch(getAllFacilitySuccess(response.data.data));
            })
            .catch(err=>{
                console.log(err.response);
                dispatch(getAllFacilityFail(err));
            })
    }
};

export const getFacilityStart = (token) =>{
    return{
        type: actionTypes.GET_FACILITY_START
    };
};

export const getFacilitySuccess = (facility) =>{
    return{
        type: actionTypes.GET_FACILITY_SUCCESS,
        facility: facility
    };
};

export const getFacilityFail = (error) =>{
    return {
        type: actionTypes.GET_FACILITY_FAIL,
        error: error.message
    };
};

export const getFacilityErase = () =>{
    return {
        type: actionTypes.GET_FACILITY_ERASE
    };
};

export const getFacility = (token, id) =>{
    return dispatch => {
        dispatch(getFacilityStart());

        const headers = {
            Authorization: token
        };

        axios.get('https://cors-anywhere.herokuapp.com/project-highway.herokuapp.com/facility/' + id,
                    {headers}
                )
            .then(response=>{
                dispatch(getFacilitySuccess(response.data.data));
            })
            .catch(err=>{
                console.log(err.response);
                dispatch(getFacilityFail(err));
            })
    }
};