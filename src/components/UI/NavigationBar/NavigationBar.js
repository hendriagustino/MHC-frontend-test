import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as actions from './../../../store/actions/index';

class NavigationBar extends React.Component {
 
  state = {
      collapse: false,
  };

  onClick = () =>{
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  onLogoutButtonClick = () =>{
    this.props.onLogout();
    this.props.history.push("/");
  }

  render() {
    const bgPink = {backgroundColor: '#333'}
    const container = {}
    return(
      <div>
          <header>
            <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
              
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav left>
                  <MDBNavItem>
                      <MDBNavLink to="/">Dashboard</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="/personnelmanager">Personnel Manager</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="/facilitymanager">Facility Manager</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/providermanager">Provider Manager</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                
                <MDBNavbarNav right>
                  <MDBNavItem>
                      <button onClick={this.onLogoutButtonClick} className="btn btn-danger" >Logout</button>
                  </MDBNavItem>
                </MDBNavbarNav>
                
              </MDBCollapse>
            </MDBNavbar>
          </header>
        <MDBContainer style={container} className="text-center mt-5 pt-5">
        </MDBContainer>
      </div>
    );
  }
}

// const mapStateToProps = state =>{
//   return {
//     isAuthenticated: state.auth.token !== null
//   }
// };

const mapDispatchToProps = dispatch =>{
  return {
    onLogout : ()=> dispatch(actions.authLogout())
  }
}

export default withRouter(connect (null, mapDispatchToProps) (NavigationBar));

