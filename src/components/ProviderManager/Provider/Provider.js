import React, {Component} from 'react';
// import classes from './Provider.module.css';
import {connect} from 'react-redux';
import * as actions from './../../../store/actions/index';
import Spinner from './../../UI/Spinner/Spinner';
import {Link} from 'react-router-dom';

class Provider extends Component{

    //retrieve data of one specific Provider from the API based on given id params
    componentDidMount(){
        this.props.getProvider(this.props.token, this.props.match.params.id);
    };

    //whenever the user leaves this Provider page / component, we then remove or do
    // a clean up of the array provider: [] in the Redux Store
    componentWillUnmount(){
        this.props.getProviderErase();
    }

    render(){
        
        //copying the whole data of a Provider object and then put it in a component local
        // variable
        let provider = [...this.props.provider];

        return(
            <div>
                <div className="container mt-3" style={{maxWidth: '80vw'}}>
                    <div className="card text-center" style={{boxShadow: '4px 4px 8px lightgray'}}>
                        <div className="card-header">
                            Provider Information
                            
                        </div>
                        
                        {this.props.loading 
                            ? 
                            <Spinner/>
                            :
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6 text-right">
                                        <p className="card-text">Provider Name</p>
                                        <p className="card-text">Type</p>
                                        <p className="card-text">Telephone</p>
                                        <p className="card-text">Fax</p>
                                        <p className="card-text">Website</p>
                                        <p className="card-text">Address</p>
                                        <p className="card-text">Mastercode</p>
                                        <p className="card-text">Created at : </p>
                                        <p className="card-text">Specialty Name</p>
                                        <p className="card-text">Specialty ID</p>
                                        <p className="card-text">ID</p>
                                        
                                    </div>
                                    <div className="col-6 text-left">
                                        
                                        {/* below i keep using the array index number [0] because i know the
                                        data that i get back from the API request will always be only 1 data.
                                        */}
                                        <p><strong>{provider[0].clinicName}</strong></p>
                                        <p><strong>{provider[0].type}</strong></p>
                                        <p><strong>{provider[0].contact.telephone}</strong></p>
                                        <p><strong>{provider[0].contact.fax}</strong></p>
                                        <p><strong>{provider[0].contact.website}</strong></p>
                                        <p><strong>
                                            {provider[0].address.longAddress}
                                        </strong></p>

                                        <p><strong>{provider[0].masterCode}</strong></p>

                                        {   
                                            provider[0].createdAt
                                            ?
                                            (<p><strong>{provider[0].createdAt}</strong></p>)
                                            :
                                            (<p><strong>-</strong></p>) 
                                        }
                                        
                                        {   
                                            provider[0].defaultSpecialty.specialtyName
                                            ?
                                            (<p><strong>{provider[0].defaultSpecialty.specialtyName}</strong></p>)
                                            :
                                            (<p><strong>-</strong></p>) 
                                        }

                                        {   
                                            provider[0].defaultSpecialty.specialtyID
                                            ?
                                            (<p><strong>{provider[0].defaultSpecialty.specialtyID}</strong></p>)
                                            :
                                            (<p><strong>-</strong></p>) 
                                        }

                                         <p><strong>{provider[0].ID}</strong></p>

                                    </div>
                                </div>
                            </div>
                        }

                        <div className="card-footer text-muted">
                            <Link to="/providermanager">Return</Link>
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
        provider: state.providerManager.provider,
        loading: state.providerManager.loading
    }
};

const mapDispatchToProps = dispatch => {
    return{
        getProvider : (token, id) => dispatch(actions.getProvider(token, id)),
        getProviderErase: () => dispatch(actions.getProviderErase())
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(Provider);
