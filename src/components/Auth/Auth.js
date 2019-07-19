import React, {Component} from 'react';
import classes from './Auth.module.css';
import {Button} from 'reactstrap';

import {connect} from 'react-redux';
import * as actions from './../../store/actions/index';
import Spinner from './../../components/UI/Spinner/Spinner';

class Auth extends Component{

    state = {
        username: '',
        password: ''
    }

    onInputChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    };

    submitHandler = (e) =>{
        e.preventDefault();
        this.props.onAuth(this.state.username, this.state.password);
    };
    
    render(){

        let form = (
            <form onSubmit={this.submitHandler}>
                    <div className="container py-4 mt-5">
                        <div className="card"  style={{boxShadow: '4px 4px 5px lightgray'}}>
                                <div className="card-body">
                                    <div className="form-group">
                                        <input onChange={this.onInputChange} id="username" type="username" className="form-control text-center" placeholder="Username"/>
                                    </div>
                                    <div className="form-group">
                                        <input onChange={this.onInputChange} id="password" type="password" className="form-control text-center" placeholder="Password"/>
                                    </div>
                                    <Button type="submit" className="bg-success btn-block">LOGIN</Button>
                                </div>
                        </div>
                    </div>
                </form>
        );

        if (this.props.loading){
            form = <Spinner/>
        }

        // let errMes = null;

        // if(this.props.error){
        //     errMes = <p>{this.props.error}</p>
        // }

        return(
            <div className={classes.Auth}>
                {/* {errMes} */}
                {form}
            </div>
        );
    }
};

const mapStateToProps = state =>{
    return{
        loading: state.auth.loading
        // error: state.auth.error
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onAuth: (username, password) => dispatch(actions.auth(username, password))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Auth);
