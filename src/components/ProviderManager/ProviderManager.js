import React, {Component} from 'react';
import NavigationBar from './../UI/NavigationBar/NavigationBar';


class ProviderManager extends Component {
  
  render(){ 
    return(
      <div>
        <NavigationBar/>
        <h1>Provider Manager</h1>
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
export default ProviderManager;

