import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import authReducer from './store/reducers/auth';
import personnelManagerReducer from './store/reducers/personnelManager';
import facilityManagerReducer from './store/reducers/facilityManager';
import providerManagerReducer from './store/reducers/providerManager';

//adding the Redux Devtools extension to the browser so that we can get to debug
//with the the help of this devtools to see more clearly what actions have been dispatched
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//combining reducers into a one single rootReducer before passing it to the global Redux Store
const rootReducer = combineReducers({
    auth: authReducer,
    personnelManager: personnelManagerReducer,
    facilityManager: facilityManagerReducer,
    providerManager: providerManagerReducer
});


const store = createStore(rootReducer, composeEnhancers(
    //applying the "Redux-Thunk" middleware because normal Redux can't dispatch 
    // or handle asynchronous code ( API requests code)
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
