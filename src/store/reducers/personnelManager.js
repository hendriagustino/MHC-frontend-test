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
        personnel: [...action.personnel]
    };
};

const getAllPersonnelFail = (state, action) =>{
    return{
        ...state,
        loading: false,
        error: action.error
    }
}

const getPersonnelStart = (state, action) =>{
    return{
        ...state,
        loading: true
    };
};

const getPersonnelSuccess = (state, action) =>{
    return{
        ...state,
        loading: false,
        personnel: [...action.personnel]
    }
}

const getPersonnelFail = (state, action) =>{
    return{
        ...state,
        loading: false,
        error: action.error
    }
}

const getPersonnelErase = (state, action) =>{
    return{
        ...state,
        personnel: []
    }
}

const deletePersonnelStart = (state, action) =>{
    return{
        ...state,
        loading: true
    };
};

const deletePersonnelSuccess = (state, action) =>{
    return{
        ...state,
        loading: false
    }
}

const deletePersonnelFail = (state, action) =>{
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

        case actionTypes.GET_PERSONNEL_START:
            return getPersonnelStart(state, action);
        case actionTypes.GET_PERSONNEL_SUCCESS:
            return getPersonnelSuccess(state, action);
        case actionTypes.GET_PERSONNEL_FAIL:
            return getPersonnelFail(state, action);
            
        case actionTypes.GET_PERSONNEL_ERASE:
            return getPersonnelErase(state, action);

        case actionTypes.DELETE_PERSONNEL_START:
            return deletePersonnelStart(state, action);
        case actionTypes.DELETE_PERSONNEL_SUCCESS:
            return deletePersonnelSuccess(state, action);
        case actionTypes.DELETE_PERSONNEL_FAIL:
            return deletePersonnelFail(state, action);

        default:
            return state;
    }
};

export default reducer;


