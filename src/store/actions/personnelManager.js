import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getAllPersonnelStart = (token) =>{
    return{
        type: actionTypes.GET_ALL_PERSONNEL_START
    }
}

export const getAllPersonnelSuccess = () =>{
    return{
        type: actionTypes.GET_ALL_PERSONNEL_SUCCESS
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
        
        console.log('token-->',token);

        axios.get('https://cors-anywhere.herokuapp.com/project-highway.herokuapp.com/personnel', null,
                    {headers:{ "Authorization":  token}}
                )
            .then(response=>{
                console.log(response.data);
                console.log('SUKSES!');
                //ini dipending dlu. aku mau liat bentuk response.data nya kyk mana dlu
                // dispatch(getAllPersonnelSuccess(response.data));
            })
            .catch(err=>{
                console.log(err.response);
                // jalanin
                dispatch(getAllPersonnelFail(err));
            })
    }
};
