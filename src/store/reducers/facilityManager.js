import * as actionTypes from './../actions/actionTypes';

const initialState = {
    loading: false,
    error: null,
    facility: []
};

const getAllFacilityStart = (state, action) =>{
    return{
        ...state,
        loading: true
    };
};

const getAllFacilitySuccess = (state, action) =>{
    return{
        ...state,
        error: null,
        loading: false,
        facility: [...action.facility]
    };
};

const getAllFacilityFail = (state, action) =>{
    return{
        ...state,
        loading: false,
        error: action.error
    };
};

const getFacilityStart = (state, action) =>{
    return{
        ...state,
        loading: true
    };
};

const getFacilitySuccess = (state, action) =>{
    return{
        ...state,
        loading: false,
        facility: [...action.facility]
    }
}

const getFacilityFail = (state, action) =>{
    return{
        ...state,
        loading: false,
        error: action.error
    }
}

const getFacilityErase = (state, action) =>{
    return{
        ...state,
        facility: []
    }
};

const deleteFacilityStart = (state, action) =>{
    return{
        ...state,
        loading: true
    }
};

const deleteFacilitySuccess = (state, action)=>{
    return{
        ...state,
        loading: false
    }
}

const deleteFacilityFail = (state, action) =>{
    return{
        ...state,
        loading: false,
        error: action.error
    }
}

const reducer = (state= initialState, action) =>{
    switch(action.type){
        case actionTypes.GET_ALL_FACILITY_START:
            return getAllFacilityStart(state, action);
        case actionTypes.GET_ALL_FACILITY_SUCCESS:
            return getAllFacilitySuccess(state, action);
        case actionTypes.GET_ALL_FACILITY_FAIL:
            return getAllFacilityFail(state, action);

        case actionTypes.GET_FACILITY_START:
            return getFacilityStart(state, action);
        case actionTypes.GET_FACILITY_SUCCESS:
            return getFacilitySuccess(state, action);
        case actionTypes.GET_FACILITY_FAIL:
            return getFacilityFail(state, action);
            
        case actionTypes.GET_FACILITY_ERASE:
            return getFacilityErase(state, action);

        case actionTypes.DELETE_FACILITY_START:
            return deleteFacilityStart(state, action);
        case actionTypes.DELETE_FACILITY_SUCCESS:
            return deleteFacilitySuccess(state, action);
        case actionTypes.DELETE_FACILITY_FAIL:
            return deleteFacilityFail(state, action);

        default:
            return state;
    }
};

export default reducer;
