import React, {Component} from 'react';
import Spinner from './../UI/Spinner/Spinner';

import NavigationBar from './../UI/NavigationBar/NavigationBar';
import * as actions from './../../store/actions/index';
import {connect} from 'react-redux';
import { Card, CardTitle, CardText, CardDeck, CardBody } from 'reactstrap';

class Dashboard extends Component {

  //here I dispatch getAllProvider & getAllPersonnel every time this component renders
  // because I want to present the amount of Providers, Personnels, and Personnel.type === 'DOCTOR'
  // to the user
  componentDidMount(){
    this.props.getAllProvider(this.props.token);
    this.props.getAllPersonnel(this.props.token);
  }

  render(){

    //filtering out only data with the property 'type' === 'DOCTOR' and then storing it to the doctors constant
    //all other non-DOCTOR personnel.type won't get into this const here
    const doctors = this.props.personnel.filter( personnel => {
      return personnel.type === 'DOCTOR'
      }
    );

    return(
      <div className="container">
        <NavigationBar/>
        <h1>Dashboard</h1>

        <CardDeck>
          <Card style={{boxShadow: '8px 8px 5px lightgray'}}>
            <CardBody>
              <CardTitle><span className="display-4 text-muted">Total Providers</span></CardTitle>
              
              <CardText>
                {this.props.loadingProvider
                  ?
                    <Spinner/>
                  :
                    //here we directly count the length of provider(s) in the redux store after dispatching getAllProvider to count its length
                    <span className="display-1">{this.props.provider.length}</span>
                }
              </CardText>

            </CardBody>
          </Card>
          <Card style={{boxShadow: '8px 8px 5px lightgray'}}>
            <CardBody>
              <CardTitle><span className="display-4 text-muted">Total Personnels</span></CardTitle>
              
              <CardText>
                {this.props.loadingPersonnel
                  ?
                    <Spinner/>
                  :
                    //here we directly count the length of personnel(s) in the redux store after dispatching getAllPersonnel
                    <span className="display-1">{this.props.personnel.length}</span>
                }
              </CardText>

              </CardBody>
          </Card>
          <Card style={{boxShadow: '8px 8px 5px lightgray'}}>
            <CardBody>
              <CardTitle><span className="display-4 text-muted">Total of Doctors</span></CardTitle>
              <CardText>
                {
                  this.props.loadingPersonnel
                  ?
                    <Spinner/>
                  :
                    //here we basically still make use the result out of getAllPersonnel action"
                    //which we then store it into the const doctors where we just do a length count to the const itself
                    <span className="display-1">{doctors.length}</span>
                }
              </CardText>
            </CardBody>
          </Card>
        </CardDeck>


      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    token: state.auth.token,
    
    loadingProvider: state.providerManager.loading,
    provider: state.providerManager.provider,
    
    loadingPersonnel: state.personnelManager.loading,
    personnel: state.personnelManager.personnel
  }
};

const mapDispatchToProps = dispatch =>{
  return {
    getAllProvider : (token) => dispatch(actions.getAllProvider(token)),
    getAllPersonnel: (token) => dispatch(actions.getAllPersonnel(token))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
