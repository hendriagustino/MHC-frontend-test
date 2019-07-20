import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getAllPersonnelStart = (token) =>{
    return{
        type: actionTypes.GET_ALL_PERSONNEL_START
    }
}

export const getAllPersonnelFail = (error) =>{
    return {
        type: actionTypes.GET_ALL_PERSONNEL_FAIL,
        error: error.message
    };
};

export const getAllPersonnelSuccess = (personnel) =>{
    return{
        type: actionTypes.GET_ALL_PERSONNEL_SUCCESS,
        personnel: personnel
    };
};

export const getAllPersonnel = token =>{
    return dispatch => {
        dispatch(getAllPersonnelStart());
        
        // const headers = {
        //     'Authorization': `Bearer ${token}`
        // };

        const headers = {
            Authorization: token
        };

        axios.get('https://cors-anywhere.herokuapp.com/project-highway.herokuapp.com/personnel',
                    {headers}
                )
            .then(response=>{
                console.log('respondata',response.data.data);
                console.log('SUKSES!');
                dispatch(getAllPersonnelSuccess(response.data.data));
            })
            .catch(err=>{
                console.log(err.response);
                // jalanin
                dispatch(getAllPersonnelFail(err));
            })
    }
};
