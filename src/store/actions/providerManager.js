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

        //getAll data of the Provider
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

export const getProviderStart = (token) =>{
    return{
        type: actionTypes.GET_PROVIDER_START
    };
};

export const getProviderSuccess = (provider) =>{
    return{
        type: actionTypes.GET_PROVIDER_SUCCESS,
        provider: provider
    };
};

export const getProviderFail = (error) =>{
    return {
        type: actionTypes.GET_PROVIDER_FAIL,
        error: error.message
    };
};

export const getProviderErase = () =>{
    return {
        type: actionTypes.GET_PROVIDER_ERASE
    };
};

export const getProvider = (token, id) =>{
    return dispatch => {
        dispatch(getProviderStart());

        const headers = {
            Authorization: token
        };
        //get data only of one specific Provider
        axios.get('https://cors-anywhere.herokuapp.com/project-highway.herokuapp.com/provider/' + id,
                    {headers}
                )
            .then(response=>{
                dispatch(getProviderSuccess(response.data.data));
            })
            .catch(err=>{
                console.log(err.response);
                dispatch(getProviderFail(err));
            })
    }
};
//////////////////////////////////////////////////////////

export const deleteProviderStart = (token) =>{
    return {
        type: actionTypes.DELETE_PROVIDER_START
    };
};

export const deleteProviderSuccess = () =>{
    return{
        type: actionTypes.DELETE_PROVIDER_SUCCESS
    };
};

export const deleteProviderFail = (error) =>{
    return{
        type: actionTypes.DELETE_PROVIDER_FAIL,
        error: error.message
    };
};

export const deleteProvider = (token, id) =>{
    return dispatch =>{
        dispatch(deleteProviderStart());

        const headers = {
            Authorization: token
        };
        //delete one specific Provider object from the store
        axios.delete('https://cors-anywhere.herokuapp.com/project-highway.herokuapp.com/provider/'+ id,
                    {headers}
                    )
            .then(response=>{
                dispatch(getAllProvider(token));
                dispatch(deleteProviderSuccess());
            })
            .catch(err=>{
                console.log(err.response);
                dispatch(deleteProviderFail(err));
            })

    }
}
