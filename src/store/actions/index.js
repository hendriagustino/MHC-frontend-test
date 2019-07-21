
//the main index.js page for all actions file
// here we combine all the actions in the folder store/actions/...

export {
    auth, authLogout, authTokenCheck
} from './auth';

export {
    getAllPersonnel,
    getPersonnel, getPersonnelErase, deletePersonnel
} from './personnelManager';

export {
    getAllFacility,
    getFacility, getFacilityErase, deleteFacility
} from './facilityManager';

export {
    getAllProvider,
    getProvider, getProviderErase
} from './providerManager';