import * as actionTypes from './../actions/actionTypes';

const initialState = {
    // token: null,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMWQ4YjAwYmYwODM0MTcwZTg4YzdhNiIsImlhdCI6MTU2MjIxNzIyNywiZXhwIjoxNTY0ODA5MjI3fQ.Y1uLnjTEIne_uBVjX69VnNrKm7V4n10E0dh0RfurR1Q',
    loading: false,
    error: null
};

const authStart = (state, action) =>{
    return {
        ...state,
        error: null,
        loading: true
    }
};

const authSuccess = (state, action)=>{
    return{
        ...state,
        error: null,
        loading: false,
        token: action.token
    };
};

const authFail = (state, action)=>{
    return{
        ...state,
        loading: false,
        error: action.error
    }
}

const authLogout = (state, action) =>{
    return{
        ...state,
        token: null
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_START :
            return authStart(state, action);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);  
        case actionTypes.AUTH_FAIL:
            return authFail(state, action);
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action);
        default:
            return state;
    }
};

export default reducer;


