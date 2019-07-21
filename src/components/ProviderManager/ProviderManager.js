import React, {Component} from 'react';
import {connect} from 'react-redux';

import {MDBDataTable, MDBBtn} from 'mdbreact';
import classes from './ProviderManager.module.css';
import * as actions from './../../store/actions/index';
import Spinner from './../UI/Spinner/Spinner';
import {confirm} from './../UI/Modal/Confirm/Confirm';

import NavigationBar from './../UI/NavigationBar/NavigationBar';

class ProviderManager extends Component {
  
  componentDidMount(){
    this.props.getAllProvider(this.props.token);
  }

  viewProvider = (id) =>{
    this.props.history.push('/provider/'+ id);
  }

  deleteProvider = (id) =>{
    confirm("Are you sure to delete?")
    .then(
      ()=>{this.props.deleteProvider(this.props.token, id)},
      ()=>{}
    );
  };

  render(){ 

    const data = {
      columns: [
        {label: 'Provider', field: 'provider'},
        {label: 'Type', field: 'type'},
        {label: 'HasGST', field: 'hasGST'},
        {label: 'ID', field: 'ID'},
        {label: 'Action', field: 'action'}
      ],
      rows: this.props.provider.map(provider=>{
        return{
          provider: provider.clinicName ? provider.clinicName : '',
          type: provider.type ? provider.type : '',
          hasGST: provider.gstStatus.hasGST ? 'Yes' : 'No',
          ID : provider.ID ? provider.ID : '',
          action:
            <React.Fragment>
              <MDBBtn
                style={{marginRight: '5px'}}
                size="sm"
                color="success"
                onClick={()=> this.viewProvider(provider.ID)}
                >
                VIEW
              </MDBBtn>

              <MDBBtn size="sm" color="danger" 
                onClick={()=>this.deleteProvider(provider.ID)}
                >
                DELETE
              </MDBBtn>
            </React.Fragment>
        }
      })
    };

    return(
      <div className={classes.ProviderManager}>
        <NavigationBar/>
        <h1>Provider Manager</h1>
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
    provider: state.providerManager.provider,
    loading: state.providerManager.loading
  }
};

const mapDispatchToProps = dispatch =>{
  return {
    getAllProvider : (token) => dispatch(actions.getAllProvider(token)),
    deleteProvider : (token, id) => dispatch(actions.deleteProvider(token, id))
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (ProviderManager);
