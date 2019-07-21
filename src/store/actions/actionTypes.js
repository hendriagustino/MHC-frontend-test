
//this file contains all name for the Action.type
// this is kind of a leaner way and also to prevent any bug to happen due to typo of
// action.type name. Because since we use exported action.type from here, 
// if we happen to mistype any, the webpack / browser will directly pop us a notification

export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const GET_PERSONNEL_START =  'GET_PERSONNEL_START';
export const GET_PERSONNEL_SUCCESS= 'GET_PERSONNEL_SUCCESS';
export const GET_PERSONNEL_FAIL =   'GET_PERSONNEL_FAIL';
export const GET_PERSONNEL_ERASE =   'GET_PERSONNEL_ERASE';

export const DELETE_PERSONNEL_START =  'DELETE_PERSONNEL_START';
export const DELETE_PERSONNEL_SUCCESS= 'DELETE_PERSONNEL_SUCCESS';
export const DELETE_PERSONNEL_FAIL =   'DELETE_PERSONNEL_FAIL';

export const GET_ALL_PERSONNEL_START =  'GET_ALL_PERSONNEL_START';
export const GET_ALL_PERSONNEL_SUCCESS= 'GET_ALL_PERSONNEL_SUCCESS';
export const GET_ALL_PERSONNEL_FAIL =   'GET_ALL_PERSONNEL_FAIL';

//////////////////////////////////////////////////////////////////////

export const GET_FACILITY_START =  'GET_FACILITY_START';
export const GET_FACILITY_SUCCESS= 'GET_FACILITY_SUCCESS';
export const GET_FACILITY_FAIL =   'GET_FACILITY_FAIL';
export const GET_FACILITY_ERASE =   'GET_FACILITY_ERASE';

export const DELETE_FACILITY_START =  'DELETE_FACILITY_START';
export const DELETE_FACILITY_SUCCESS= 'DELETE_FACILITY_SUCCESS';
export const DELETE_FACILITY_FAIL =   'DELETE_FACILITY_FAIL';

export const GET_ALL_FACILITY_START =   'GET_ALL_FACILITY_START';
export const GET_ALL_FACILITY_SUCCESS = 'GET_ALL_FACILITY_SUCCESS';
export const GET_ALL_FACILITY_FAIL =    'GET_ALL_FACILITY_FAIL';

//////////////////////////////////////////////////////////////////////

export const GET_PROVIDER_START =  'GET_PROVIDER_START';
export const GET_PROVIDER_SUCCESS= 'GET_PROVIDER_SUCCESS';
export const GET_PROVIDER_FAIL =   'GET_PROVIDER_FAIL';
export const GET_PROVIDER_ERASE =  'GET_PROVIDER_ERASE';

export const DELETE_PROVIDER_START =  'DELETE_PROVIDER_START';
export const DELETE_PROVIDER_SUCCESS= 'DELETE_PROVIDER_SUCCESS';
export const DELETE_PROVIDER_FAIL =   'DELETE_PROVIDER_FAIL';

export const GET_ALL_PROVIDER_START =   'GET_ALL_PROVIDER_START';
export const GET_ALL_PROVIDER_SUCCESS = 'GET_ALL_PROVIDER_SUCCESS';
export const GET_ALL_PROVIDER_FAIL =    'GET_ALL_PROVIDER_FAIL';

