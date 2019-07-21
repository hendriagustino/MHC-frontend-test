import React, {Component} from 'react';
import classes from './Facility.module.css';
import {connect} from 'react-redux';
import * as actions from './../../../store/actions/index';
import Spinner from './../../UI/Spinner/Spinner';
import {Link} from 'react-router-dom';

class Facility extends Component{

    //get complete data/info about this one specific Facility based on given params id
    componentDidMount(){
        this.props.getFacility(this.props.token, this.props.match.params.id);
    }

    //clean-up work of Facility array in Redux store when the user leave this 
    // component/ page
    componentWillUnmount(){
        this.props.getFacilityErase();
    }

    render(){

        //copy content of facility array in the Redux store to a local variable
        let facility = [...this.props.facility];

        return(
            <div className={classes.Facility}>
                <div className="container mt-3" style={{maxWidth: '800px'}}>
                    <div className="card text-center" style={{boxShadow: '4px 4px 8px lightgray'}}>
                        <div className="card-header">
                            Facility Information
                            
                        </div>
                        
                        {this.props.loading 
                            ? 
                            <Spinner/>
                            :
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6 text-right">
                                        <p className="card-text">Facility ID</p>
                                        <p className="card-text">Created By : </p>
                                        <p className="card-text">Update By : </p>
                                        <p className="card-text">_id</p>
                                        <p className="card-text">Facility Name</p>
                                        <p className="card-text">Created At : </p>
                                        <p className="card-text">Updated At : </p>
                                        <p className="card-text">ID</p>
                                    </div>

                                    <div className="col-6 text-left">
                                        {/* below i keep using the [0] index number of an array because i know the length of the data willnot exceed more than 1 */}
                                        <p><strong>{facility[0].facilityID}</strong></p>
                                        <p><strong>{facility[0].createdBy}</strong></p>
                                        
                                        <p><strong>
                                            {facility[0].updatedBy ? facility[0].updatedBy : '-' }
                                        </strong></p>

                                        <p><strong>{facility[0]._id}</strong></p>
                                        <p><strong>{facility[0].facilityName}</strong></p>
                                        <p><strong>{facility[0].createdAt}</strong></p>
                                        <p><strong>{facility[0].updatedAt}</strong></p>
                                        <p><strong>{facility[0].ID}</strong></p>

                                    </div>
                                </div>
                            </div>
                        }

                        <div className="card-footer text-muted">
                            <Link to="/facilitymanager">Return</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        token: state.auth.token,
        facility: state.facilityManager.facility,
        loading: state.facilityManager.loading
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        getFacility : (token, id) => dispatch(actions.getFacility(token,id)),
        getFacilityErase: () => dispatch(actions.getFacilityErase())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Facility);