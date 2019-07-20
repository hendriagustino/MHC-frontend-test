import React, {Component} from 'react';
import {connect} from 'react-redux';

import { MDBDataTable, MDBBtn } from 'mdbreact';
// import classes from './FacilityManager.module.css';
import * as actions from './../../store/actions/index';

import NavigationBar from './../UI/NavigationBar/NavigationBar';

class FacilityManager extends Component {

  componentDidMount(){
    this.props.getAllFacility(this.props.token);
  };
  
  state = {
    facility:
      [
        {
          "facilityID": "FACI1",
          "createdBy": "5d1d8b00bf0834170e88c7a6",
          "updatedBy": null,
          "_id": "5d1d8bc0bf0834170e88c7ab",
          "facilityName": "FACILITY",
          "createdAt": "2019-07-04T05:16:48.282Z",
          "updatedAt": "2019-07-04T05:16:48.310Z",
          "ID": 1
        }
      ]
  }

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
                  onClick={()=> this.viewPersonnel(facility.ID)}
                  >
                  VIEW
                </MDBBtn>

                <MDBBtn size="sm" color="danger" 
                  onClick={()=>this.deletePersonnel(facility.ID)}
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
          <MDBDataTable
            striped
            bordered
            hover
            data={data}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    token: state.auth.token,
    facility: state.facilityManager.facility
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    getAllFacility: (token) => dispatch(actions.getAllFacility(token))
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (FacilityManager);
// export default FacilityManager;

