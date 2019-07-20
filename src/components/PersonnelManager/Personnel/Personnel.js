import React, { Component } from 'react';
import classes from './Personnel.module.css';
import {connect} from 'react-redux';
import * as actions from './../../../store/actions/index';
import Spinner from './../../UI/Spinner/Spinner';
import { Link } from 'react-router-dom';


class Personnel extends Component{

    componentDidMount(){
        this.props.getPersonnel(this.props.token, this.props.match.params.id);
    };

    componentWillUnmount(){
        this.props.getPersonnelErase();
    };

    render(){

        let personnel = [...this.props.personnel];

        return(
            <div className={classes.Personnel}>
                
                <div className="container mt-3" style={{maxWidth: '800px'}}>
                    <div className="card text-center" style={{boxShadow: '4px 4px 8px lightgray'}}>
                        <div className="card-header">
                            Personnel Information
                            
                        </div>
                        
                        {this.props.loading 
                            ? 
                            <Spinner/>
                            :
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6 text-right">
                                        <p className="card-text">First Name</p>
                                        <p className="card-text">Last Name</p>
                                        <p className="card-text">NRIC</p>
                                        <p className="card-text">Personnel ID</p>
                                        <p className="card-text">Type</p>
                                        <p className="card-text">MCR Number</p>
                                        <p className="card-text">Designation</p>
                                        <p className="card-text">Mobile Number</p>
                                        <p className="card-text">Media</p>
                                        <p className="card-text">Experience</p>
                                        <p className="card-text">Specialty Name</p>
                                        <p className="card-text">Specialty ID</p>
                                        <p className="card-text">Specialty created at :</p>
                                        <p className="card-text">Sub Specialty Name</p>
                                        <p className="card-text">Sub Specialty ID</p>
                                        <p className="card-text">Sub Specialty created at :</p>
                                        <p className="card-text">Description and Remarks</p>

                                    </div>
                                    <div className="col-6 text-left">
                                        <p><strong>{personnel[0].firstName}</strong></p>
                                        <p><strong>{personnel[0].lastName}</strong></p>
                                        <p><strong>{personnel[0].NRIC}</strong></p>
                                        <p><strong>{personnel[0].personnelID}</strong></p>
                                        <p><strong>{personnel[0].type}</strong></p>
                                        <p><strong>{personnel[0].MCRNumber}</strong></p>
                                        <p><strong>{personnel[0].designation}</strong></p>
                                        <p><strong>{personnel[0].mobileNumber}</strong></p>
                                        
                                        {
                                            personnel[0].credentials.media 
                                            ? 
                                                (<p><strong>{personnel[0].credentials.media}</strong></p>) 
                                            : 
                                                (<p><strong>-</strong></p>) 
                                        }

                                        {
                                            personnel[0].credentials.yearsOfExperience 
                                            ? 
                                                (<p><strong>{personnel[0].credentials.yearsOfExperience}</strong></p>) 
                                            :
                                                (<p><strong>-</strong></p>) 
                                        }
                                    
                                        
                                        {   
                                            personnel[0].specialtyDetails.defaultSpecialty 
                                            ?
                                            (<p><strong>{personnel[0].specialtyDetails.defaultSpecialty.specialtyName}</strong></p>)
                                            :
                                            (<p><strong>-</strong></p>) 
                                        }

                                        {   
                                            personnel[0].specialtyDetails.defaultSpecialty 
                                            ?
                                            (<p><strong>{personnel[0].specialtyDetails.defaultSpecialty.specialtyID}</strong></p>)
                                            :
                                            (<p><strong>-</strong></p>) 
                                        }

                                        {   
                                            personnel[0].specialtyDetails.defaultSpecialty 
                                            ?
                                            (<p><strong>{personnel[0].specialtyDetails.defaultSpecialty.createdAt}</strong></p>)
                                            :
                                            (<p><strong>-</strong></p>) 
                                        }

                                        {   
                                            personnel[0].specialtyDetails.subSpecialties 
                                            ?
                                            (<p><strong>{personnel[0].specialtyDetails.subSpecialties.specialtyName}</strong></p>)
                                            :
                                            (<p><strong>-</strong></p>) 
                                        }

                                        {   
                                            personnel[0].specialtyDetails.subSpecialties 
                                            ?
                                            (<p><strong>{personnel[0].specialtyDetails.subSpecialties.specialtyID}</strong></p>)
                                            :
                                            (<p><strong>-</strong></p>) 
                                        }

                                        {   
                                            personnel[0].specialtyDetails.subSpecialties 
                                            ?
                                            (<p><strong>{personnel[0].specialtyDetails.subSpecialties.createdAt}</strong></p>)
                                            :
                                            (<p><strong>-</strong></p>) 
                                        }

                                        {   
                                            personnel[0].descriptionAndRemarks
                                            ?
                                            (<p><strong>{personnel[0].descriptionAndRemarks}</strong></p>)
                                            :
                                            (<p><strong>-</strong></p>) 
                                        }
                                    </div>
                                </div>
                            </div>
                        }

                        <div className="card-footer text-muted">
                            <Link to="/personnelmanager">Return</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = state =>{
    return{
        token: state.auth.token,
        personnel: state.personnelManager.personnel,
        loading: state.personnelManager.loading
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        getPersonnel : (token, id) => dispatch(actions.getPersonnel(token, id)),
        getPersonnelErase : () => dispatch(actions.getPersonnelErase())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Personnel);
