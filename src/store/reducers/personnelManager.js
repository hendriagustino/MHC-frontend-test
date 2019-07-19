import * as actionTypes from './../actions/actionTypes';

const initialState = {
    loading: false,
    error: null,
    personnel: []
};

const getAllPersonnelStart = (state, action) =>{
    return{
        ...state,
        loading: true
    };
};

const getAllPersonnelSuccess = (state, action) =>{
    return{
        ...state,
        error: null,
        loading: false,
        personnel: action.personnel
    };
};

const getAllPersonnelFail = (state, action) =>{
    return{
        ...state,
        loading: false,
        error: action.error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_ALL_PERSONNEL_START :
            return getAllPersonnelStart(state, action);
        case actionTypes.GET_ALL_PERSONNEL_SUCCESS:
            return getAllPersonnelSuccess(state, action);  
        case actionTypes.GET_ALL_PERSONNEL_FAIL:
            return getAllPersonnelFail(state, action);
        default:
            return state;
    }
};

export default reducer;


