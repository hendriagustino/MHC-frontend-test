import React, {Component} from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';

// import * as actions from './store/actions/index';

import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import PersonnelManager from './components/PersonnelManager/PersonnelManager';
import FacilityManager from './components/FacilityManager/FacilityManager';
import ProviderManager from './components/ProviderManager/ProviderManager';

class App extends Component {
  // componentDidMount(){
  //   this.props.onTryAutoSignUp();
  //}
  
  render(){
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth}/>
        <Redirect to="/auth"/>
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
      <Switch>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/personnelmanager" component={PersonnelManager}/>
        <Route path="/facilitymanager" component={FacilityManager}/>
        <Route path="/providermanager" component={ProviderManager}/>
        <Redirect to="/dashboard" />
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
    isAuthenticated: state.auth.token !== null
    // isAuthenticated: true
  }
};

const mapDispatchToProps = dispatch =>{
  return {

  }
}

export default withRouter( connect (mapStateToProps, mapDispatchToProps) (App));
