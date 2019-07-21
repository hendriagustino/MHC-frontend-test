import React, {Component} from 'react';
import {connect} from 'react-redux';

import { MDBDataTable, MDBBtn } from 'mdbreact';

import classes from './PersonnelManager.module.css';
import * as actions from './../../store/actions/index';
import Spinner from './../UI/Spinner/Spinner';
import NavigationBar from './../UI/NavigationBar/NavigationBar';
import {confirm} from './../UI/Modal/Confirm/Confirm';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from 'reactstrap';

class PersonnelManager extends Component {

  state = {
    modal: false,
    firstName: '',
    lastName: '',
    type: '',
    NRIC: '',
    designation: '',
    mobileNumber: '',
    descriptionAndRemarks: '',
    MCRNumber: '',
    yearsOfExperience: '',
    certificationName: '',
    remarks: '',
    defaultSpecialty: '',
    subSpecialties: ''
  };

  componentDidMount(){
    this.props.getAllPersonnel(this.props.token);
  };

  viewPersonnel = (id) => {
    this.props.history.push('/personnel/'+ id);
  };

  deletePersonnel = (id) => {
    confirm("Are you sure to delete?")
    .then(
      ()=>{this.props.deletePersonnel(this.props.token, id)},
      ()=>{}
    );
  };

  toggleAddForm =()=> {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  onInputChangeHandler = (e) =>{
    this.setState({
        [e.target.name] : e.target.value
      });
  }
  
  render(){
  
  //data mapping which this const is used for the MDBDataTable
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
    rows: this.props.personnel.map(personnel=>{
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
              style={{marginRight: '5px'}} size="sm" color="success"
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
        
        {/* modal for adding a new Personnel */}
        <Modal isOpen={this.state.modal} toggle={this.toggleAddForm} className={this.props.className}>
          <ModalHeader toggle={this.toggleAddForm}>Add New Personnel</ModalHeader>
          <ModalBody>

              <Form>
                <FormGroup>
                  <Input type="text" onChange={this.onInputChangeHandler} name="firstName" id="firstName" placeholder="First Name"/>
                </FormGroup>
                <FormGroup>
                  <Input type="text" onChange={this.onInputChangeHandler} name="lastName" id="lastName" placeholder="Last Name"/>
                </FormGroup>
                <FormGroup>
                  <Input type="text" onChange={this.onInputChangeHandler} name="type" id="type" placeholder="Type"/>
                </FormGroup>
                <FormGroup>
                  <Input type="text" onChange={this.onInputChangeHandler} name="NRIC" id="NRIC" placeholder="NRIC"/>
                </FormGroup>
                <FormGroup>
                  <Input type="text" onChange={this.onInputChangeHandler} name="designation" id="designation" placeholder="designation"/>
                </FormGroup>
                <FormGroup>
                  <Input type="number" onChange={this.onInputChangeHandler} name="mobileNumber" id="mobileNumber" placeholder="mobileNumber"/>
                </FormGroup>
                <FormGroup>
                  <Input type="text" onChange={this.onInputChangeHandler} name="descriptionAndRemarks" id="descriptionAndRemarks" placeholder="descriptionAndRemarks"/>
                </FormGroup>
                <FormGroup>
                  <Input type="number" onChange={this.onInputChangeHandler} name="MCRNumber" id="MCRNumber" placeholder="MCRNumber"/>
                </FormGroup>
                <FormGroup>
                  <Input type="number" onChange={this.onInputChangeHandler} name="yearsOfExperience" id="yearsOfExperience" placeholder="yearsOfExperience"/>
                </FormGroup>
                <FormGroup>
                  <Input type="text" onChange={this.onInputChangeHandler} name="certificationName" id="certificationName" placeholder="certificationName"/>
                </FormGroup>
                <FormGroup>
                  <Input type="text" onChange={this.onInputChangeHandler} name="remarks" id="remarks" placeholder="remarks"/>
                </FormGroup>
                <FormGroup>
                  <Input type="text" onChange={this.onInputChangeHandler} name="defaultSpecialty" id="defaultSpecialty" placeholder="defaultSpecialty"/>
                </FormGroup>
                <FormGroup>
                  <Input type="text" onChange={this.onInputChangeHandler} name="subSpecialties" id="subSpecialties" placeholder="subSpecialties"/>
                </FormGroup>
              </Form>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
          </ModalFooter>
        </Modal>
        
        {
          this.props.loading ? 
            <Spinner/> 
          : 
            (
              <React.Fragment>
                <Button color="success" onClick={this.toggleAddForm}>Add Personnel</Button>

                <MDBDataTable
                  striped
                  bordered
                  hover
                  data={data}
                />
              </React.Fragment>
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
    getAllPersonnel : (token) => dispatch(actions.getAllPersonnel(token)),
    deletePersonnel : (token, id) => dispatch(actions.deletePersonnel(token, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonnelManager);
