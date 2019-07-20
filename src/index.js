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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    personnelManager: personnelManagerReducer,
    facilityManager: facilityManagerReducer,
    providerManager: providerManagerReducer
});

const store = createStore(rootReducer, composeEnhancers(
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
