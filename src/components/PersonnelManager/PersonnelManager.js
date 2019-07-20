import React, {Component} from 'react';
import {connect} from 'react-redux';

import { MDBDataTable, MDBBtn } from 'mdbreact';
import classes from './PersonnelManager.module.css';
import * as actions from './../../store/actions/index';
import Spinner from './../UI/Spinner/Spinner';

import NavigationBar from './../UI/NavigationBar/NavigationBar';

class PersonnelManager extends Component {

  componentDidMount(){
    this.props.getAllPersonnel(this.props.token);
  };

  render(){
    
  const data = {
    columns: [
      {label: 'First Name', field: 'firstname'},
      {label: 'Last Name', field: 'lastname'},
      {label: 'NRIC',field: 'nric'},
      {label: 'MCR NUMBER', field: 'mcrnumber' },
      {label: 'Type', field: 'type'},
      {label: 'Designation', field: 'designation'},
      {label: 'Mobile Number', field: 'mobilenumber'},
      {label: 'ID', field: 'ID'},
      {label: 'Action', field: 'action'}
    ],
    rows:this.props.personnel.map(personnel=>{
      return{
        firstname: personnel.firstName ? personnel.firstName : '',
        lastname: personnel.lastName ? personnel.lastName : '',
        nric: personnel.NRIC ? personnel.NRIC : '',
        mcrnumber: personnel.MCRNumber ? personnel.MCRNumber : '',
        type: personnel.type ? personnel.type : '',
        designation: personnel.designation ? personnel.designation : '',
        mobilenumber : personnel.mobileNumber ? personnel.mobileNumber : '',
        ID : personnel.ID ? personnel.ID : '',
        action :
          <React.Fragment>
            <MDBBtn
              style={{marginRight: '5px'}}
              size="sm"
              color="success"
              onClick={()=> this.viewPersonnel(personnel.ID)}
              >
              VIEW
            </MDBBtn>

            <MDBBtn size="sm" color="danger" 
              onClick={()=>this.deletePersonnel(personnel.ID)}
              >
              DELETE
            </MDBBtn>
          </React.Fragment>
      }
    })
  };
  
  return (
    <div className={classes.PersonnelManager}>
      <NavigationBar/>
      <h1>Personnel Manager</h1>
      <div className="container">
        
        {
          this.props.loading ? 
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
    personnel: state.personnelManager.personnel,
    loading: state.personnelManager.loading
  }
};

const mapDispatchToProps = dispatch =>{
  return {
    getAllPersonnel : (token) => dispatch(actions.getAllPersonnel(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonnelManager);

// export default withRouter( connect (mapStateToProps, mapDispatchToProps) (Dashboard));
