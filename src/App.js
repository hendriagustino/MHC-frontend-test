import React, {Component} from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';

import * as actions from './store/actions/index';

import NotFound from './components/UI/NotFound/NotFound';

import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import PersonnelManager from './components/PersonnelManager/PersonnelManager';
import FacilityManager from './components/FacilityManager/FacilityManager';
import ProviderManager from './components/ProviderManager/ProviderManager';

class App extends Component {
  
  componentDidMount(){
    this.props.onAuthTokenCheck();
  }
  
  render(){
    let routes = (
      <Switch>
        <Route exact path="/auth" component={Auth}/>
        <Route exact path="/" component={Auth}/>
        <Route path="*" component={NotFound}/>

      </Switch>
    );

    if (this.props.token) {
      routes = (
      <Switch>
        <Route path="/personnelmanager" component={PersonnelManager}/>
        <Route path="/facilitymanager" component={FacilityManager}/>
        <Route path="/providermanager" component={ProviderManager}/>
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
