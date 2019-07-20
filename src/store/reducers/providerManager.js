import * as actionTypes from './../actions/actionTypes';

const initialState = {
    loading: false,
    error: null,
    provider: []
};

const getAllProviderStart = (state,action) =>{
    return{
        ...state,
        loading: true
    };
};

const getAllProviderSuccess =(state, action) =>{
    return{
        ...state,
        error: null,
        loading: false,
        provider: [...action.provider]
    };
};

const getAllProviderFail = (state, action) =>{
    return{
        ...state,
        loading: false,
        error: action.error
    };
};
const getProviderStart = (state, action) =>{
    return{
        ...state,
        loading: true
    };
};

const getProviderSuccess = (state, action) =>{
    return{
        ...state,
        loading: false,
        provider: [...action.provider]
    }
}

const getProviderFail = (state, action) =>{
    return{
        ...state,
        loading: false,
        error: action.error
    }
}

const getProviderErase = (state, action) =>{
    return{
        ...state,
        provider: []
    }
}

const reducer = (state= initialState, action) =>{
    switch(action.type){
        case actionTypes.GET_ALL_PROVIDER_START:
            return getAllProviderStart(state, action);
        case actionTypes.GET_ALL_PROVIDER_SUCCESS:
            return getAllProviderSuccess(state, action);
        case actionTypes.GET_ALL_PROVIDER_FAIL:
            return getAllProviderFail(state, action);

        case actionTypes.GET_PROVIDER_START:
            return getProviderStart(state, action);
        case actionTypes.GET_PROVIDER_SUCCESS:
            return getProviderSuccess(state, action);
        case actionTypes.GET_PROVIDER_FAIL:
            return getProviderFail(state, action);
            
        case actionTypes.GET_PROVIDER_ERASE:
            return getProviderErase(state, action);    
        
        default:
            return state;
    }
}

export default reducer;
