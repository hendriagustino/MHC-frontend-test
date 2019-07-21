import React, {Component} from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';

import * as actions from './store/actions/index';

import NotFound from './components/UI/NotFound/NotFound';

import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';

import PersonnelManager from './components/PersonnelManager/PersonnelManager';
import Personnel from './components/PersonnelManager/Personnel/Personnel';

import FacilityManager from './components/FacilityManager/FacilityManager';
import Facility from './components/FacilityManager/Facility/Facility';

import ProviderManager from './components/ProviderManager/ProviderManager';
import Provider from './components/ProviderManager/Provider/Provider';


class App extends Component {
  
  //this onAuthTokenCheck action is to check whenever any one of our page of the entire 
  //React app re-render the will first check whether the token is still stored in
  // localStorage, if the token is there we'll not log out the user because we dont want 
  // to our user to re-login manually whenever they happen to reload the React application, because token 
  //is stored in Redux state upon dispatching Login Succeed action. and in the end, redux state 
  //is just javascript and they disappear everytime the application reloads

  componentDidMount(){
    this.props.onAuthTokenCheck();
  }
  
  render(){
    let routes = (

      //here I implemented Route guards, for un-authenticated user we only render the Authentication page for them
      // and any pages beyond that we shall be directed to the "Error 404" page
      <Switch>
        <Route exact path="/auth" component={Auth}/>
        <Route exact path="/" component={Auth}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    );

    // do checking of whether the token is available in the Redux Store
    if (this.props.token) {
      routes = (
      <Switch>
        <Route path="/personnelmanager" component={PersonnelManager}/>
        <Route path="/personnel/:id" component={Personnel}/>

        <Route path="/facilitymanager" component={FacilityManager}/>
        <Route path="/facility/:id" component={Facility}/>

        <Route path="/providermanager" component={ProviderManager}/>
        <Route path="/provider/:id" component={Provider}/>

        <Route path="/" exact component={Dashboard}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    );
    }

    return(
      <div className="App">
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    token: state.auth.token !== null
    // token: true
  }
};

const mapDispatchToProps = dispatch =>{
  return {
    onAuthTokenCheck : () => dispatch(actions.authTokenCheck())
  }
}

export default withRouter( connect (mapStateToProps, mapDispatchToProps) (App));
