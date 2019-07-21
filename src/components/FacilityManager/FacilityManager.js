import React, {Component} from 'react';
import {connect} from 'react-redux';

import { MDBDataTable, MDBBtn } from 'mdbreact';
// import classes from './FacilityManager.module.css';
import * as actions from './../../store/actions/index';

import NavigationBar from './../UI/NavigationBar/NavigationBar';
import Spinner from './../UI/Spinner/Spinner';

import {confirm} from './../UI/Modal/Confirm/Confirm';

class FacilityManager extends Component {

  componentDidMount(){
    this.props.getAllFacility(this.props.token);
  };

  viewFacility = (id) =>{
    this.props.history.push('/facility/'+id);
  };

  deleteFacility = (id) =>{
    confirm("Are you sure to delete?")
    .then(
      ()=>{this.props.deleteFacility(this.props.token, id)},
      ()=>{}
    );
  };

  render(){ 
    
    const data = {
      columns : [
        {label: 'ID', field: 'ID'},
        {label: 'Facility', field: 'facility'},
        {label: 'Action', field: 'action'}
      ],
      rows: this.props.facility.map(facility=>{
        return {
          ID: facility.ID ? facility.ID : '' ,
          facility: facility.facilityName ? facility.facilityName : '',
          action:
            <React.Fragment>
                <MDBBtn
                  style={{marginRight: '5px'}}
                  size="sm"
                  color="success"
                  onClick={()=> this.viewFacility(facility.ID)}
                  >
                  VIEW
                </MDBBtn>

                <MDBBtn size="sm" color="danger" 
                  onClick={()=>this.deleteFacility(facility.ID)}
                  >
                  DELETE
                </MDBBtn>
              </React.Fragment>
          }
        }
      )
    };

    return(
      <div>
        <NavigationBar/>
        <h1>Facility Manager</h1>
        <div className="container">
          { 
            this.props.loading
            ?
              <Spinner/>
            :
            (
              <MDBDataTable
                striped
                bordered
                hover
                data={data}
              />
            )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    token: state.auth.token,
    facility: state.facilityManager.facility,
    loading: state.facilityManager.loading
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    getAllFacility: (token) => dispatch(actions.getAllFacility(token)),
    deleteFacility: (token, id) => dispatch(actions.deleteFacility(token, id))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(FacilityManager);
