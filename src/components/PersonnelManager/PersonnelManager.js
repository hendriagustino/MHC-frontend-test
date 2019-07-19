import React, {Component} from 'react';
import NavigationBar from './../UI/NavigationBar/NavigationBar';

import { MDBDataTable, MDBBtn } from 'mdbreact';
import classes from './PersonnelManager.module.css';

class PersonnelManager extends Component {

  state = {
    personnel : [
      {
            "credentials": {
                "media": [
                    "www.youtube.com"
                ],
                "yearsOfExperience": 12
            },
            "specialtyDetails": {
                "defaultSpecialty": "5d1d8b45bf0834170e88c7a7",
                "subSpecialties": "5d1d8b52bf0834170e88c7a8"
            },
            "personnelID": "DOCTOR1",
            "createdAt": "2019-07-04T05:23:32.021Z",
            "createdBy": "5d1d8b00bf0834170e88c7a6",
            "_id": "5d1d8de6c15dd81726fe1792",
            "firstName": "Rangga",
            "lastName": "Chendol",
            "type": "DOCTOR",
            "NRIC": "164adjakb709",
            "designation": "Manager",
            "mobileNumber": 72359872,
            "descriptionAndRemarks": "tesdescription",
            "MCRNumber": "1323412",
            "certificates": [
                {
                    "documents": [
                        "www.documentsample.com"
                    ],
                    "certificationName": "Certified Ortho",
                    "remarks": "expert"
                }
            ],
            "editHistory": [],
            "ID": 1
        },
        {
            "credentials": {
                "media": null,
                "yearsOfExperience": 12
            },
            "specialtyDetails": {
                "defaultSpecialty": "5d24317077671a2292a8def0",
                "subSpecialties": "5d24317077671a2292a8def0"
            },
            "personnelID": "5D2436A34D9B00255DC5692D3",
            "createdAt": "2019-07-18T17:19:47.045Z",
            "createdBy": "5d1d8b00bf0834170e88c7a6",
            "_id": "5d30ba200791ba001775dfed",
            "firstName": "Rangga",
            "lastName": "Chendols",
            "type": "5D2436A34D9B00255DC5692D",
            "NRIC": "164adjakb709",
            "designation": "manager",
            "mobileNumber": 592780739825,
            "descriptionAndRemarks": "sample remarks",
            "MCRNumber": "423764287",
            "profilePhoto": null,
            "certificates": [],
            "editHistory": [],
            "ID": 3
        },
        {
            "credentials": {
                "media": []
            },
            "specialtyDetails": {},
            "personnelID": "DOCTOR4",
            "createdAt": "2019-07-19T09:25:57.934Z",
            "createdBy": "5d30ae630791ba001775dfec",
            "_id": "5d319a5688c14100170c5e6a",
            "firstName": "Justin",
            "lastName": "Meong",
            "NRIC": "12312323",
            "designation": "manager",
            "mobileNumber": 8092381200,
            "descriptionAndRemarks": "Good Cat",
            "type": "DOCTOR",
            "certificates": [],
            "editHistory": [],
            "ID": 4
        }
    ]
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
      {label: 'ID', field: 'id'},
      {label: 'More', field: 'more'}
    ],
    rows: this.state.personnel.map(personnel=>{
      return{
        firstname: personnel.firstName ? personnel.firstName : '',
        lastname: personnel.lastName ? personnel.lastName : '',
        nric: personnel.NRIC ? personnel.NRIC : '',
        mcrnumber: personnel.MCRNumber ? personnel.MCRNumber : '',
        type: personnel.type ? personnel.type : '',
        designation: personnel.designation ? personnel.designation : '',
        mobilenumber : personnel.mobileNumber ? personnel.mobileNumber : '',
        id : personnel.ID ? personnel.ID : '',
        action:
          <React.Fragment>
            <MDBBtn
              style={{marginRight: '5px'}}
              size="sm"
              color="success"
              onClick={()=> this.editToggle(personnel.ID)}
              >
              VIEW
            </MDBBtn>

            <MDBBtn size="sm" color="danger" onClick={()=>this.confirmToggle(personnel.ID)}>
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

export default PersonnelManager;

// const mapStateToProps = state =>{
//   return {
//     isAuthenticated: state.auth.token !== null
//   }
// };

// const mapDispatchToProps = dispatch =>{
//   return {

//   }
// }

// export default withRouter( connect (mapStateToProps, mapDispatchToProps) (Dashboard));