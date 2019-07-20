import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getAllProviderStart = (token) =>{
    return{
        type: actionTypes.GET_ALL_PROVIDER_START
    };
};

export const getAllProviderSuccess = (provider) =>{
    return{
        type: actionTypes.GET_ALL_PROVIDER_SUCCESS,
        provider: provider
    };
};

export const getAllProviderFail = (error) =>{
    return{
        type: actionTypes.GET_ALL_PROVIDER_FAIL,
        error: error.message
    };
};

export const getAllProvider = token =>{
    return dispatch =>{
        dispatch(getAllProviderStart());

        const headers = {
            Authorization: token
        };

        axios.get('https://cors-anywhere.herokuapp.com/project-highway.herokuapp.com/provider',
                    {headers}
        )
        .then(response=>{
            dispatch(getAllProviderSuccess(response.data.data));
        })
        .catch(err=>{
            console.log(err.response);
            dispatch(getAllProviderFail(err));
        })
    }
}