import * as actionTypes from './actionTypes';
import axios from 'axios';

//action creator for the starting of getAllFacility where we need to change the loading to true
export const getAllFacilityStart = (token) =>{
    return{
        type: actionTypes.GET_ALL_FACILITY_START
    }
}

//action creator upon success of getAllFacility to store the data(s) of facility fetched
export const getAllFacilitySuccess = (facility) =>{
    return{
        type: actionTypes.GET_ALL_FACILITY_SUCCESS,
        facility: facility
    };
};

//action creator upon fail of facility data fetching from getAllFacility action
export const getAllFacilityFail = (error) =>{
    return {
        type: actionTypes.GET_ALL_FACILITY_FAIL,
        error: error.message
    };
};

//handling asynchronous code of fetching facility data through the API
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

//////////////////////////////////////////////////////////

export const deleteFacilityStart = (token) =>{
    return{
        type: actionTypes.DELETE_FACILITY_START
    };
};

export const deleteFacilitySuccess = () =>{
    return {
        type: actionTypes.DELETE_FACILITY_SUCCESS
    };
};

export const deleteFacilityFail = (error) =>{
    return{
        type: actionTypes.DELETE_FACILITY_FAIL,
        error: error.message
    };
};

export const deleteFacility = (token, id) =>{
    return dispatch=>{
        dispatch(deleteFacilityStart());

        const headers = {
            Authorization: token
        }

        axios.delete('https://cors-anywhere.herokuapp.com/project-highway.herokuapp.com/facility/' + id,
                    {headers}
                    )
                .then(response=>{
                    //upon deleting item of facility, we need to dispatch getAllFacility() to "force" the 
                    //component to re-render because if we don't, we / the user might need to have refresh manually
                    //to the the data really gone/deleted. This is considered a bad User Experience 
                    dispatch(getAllFacility(token));
                    dispatch(deleteFacilitySuccess());
                })
                .catch(err=>{
                    console.log(err.response);
                    dispatch(deleteFacilityFail(err));
                })
    }
}