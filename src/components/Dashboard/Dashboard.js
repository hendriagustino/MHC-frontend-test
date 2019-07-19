import React, {Component} from 'react';

class Dashboard extends Component {
  
  render(){ 
    return(
      <div>
        <h1>Hi I'm Dashboard</h1>
      </div>
    );
  }
}

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
export default Dashboard;
