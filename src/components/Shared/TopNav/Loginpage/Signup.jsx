import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from './../../../../actions/index'
import { Link,withRouter } from "react-router-dom";
class Signup extends Component {
    constructor(props){

        super(props);
        this.state ={
                email: '',
                userName: '',
                phone: '',
                password: '',
                passwordConfirm: '',
        }
    } 
    onChange =(e) => {
        let target = e.target
        let name = target.name
        let value = target.value
        this.setState({
            [name]: value
        })
    }
    onSubmit = async (e) => {
        e.preventDefault();
        let user = this.state
        await this.props.signUp(user)
        let {newUser} = this.props
        if(newUser.length === 0){
            alert('invalid password or email')
            return;
        }
        localStorage.setItem('token',JSON.stringify(newUser.authentication_token))
        this.props.history.push("/");
    }
    render() {
        return (
            <div className="Login container">
                <div className="card mx-auto text-center mb-3" style={style.card} >
                    <div className="card-header bg-info h3">SignUp</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-user" /> </span>
                                    </div>
                                    <input onKeyUp={this.onChange} name="userName" className="form-control" placeholder="Username" type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-user" /> </span>
                                    </div>
                                    <input onKeyUp={this.onChange} name="email" className="form-control" placeholder="Enter email" type="email" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-user" /> </span>
                                    </div>
                                    <input onKeyUp={this.onChange} name="phone" className="form-control" placeholder="phone number" type="number" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                                    </div>
                                    <input onKeyUp={this.onChange} name="password" className="form-control" placeholder="Enter password" type="password" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                                    </div>
                                    <input onKeyUp={this.onChange} name="passwordConfirm" className="form-control" placeholder="Refill password" type="password" />
                                </div>
                            </div>
                            <div className="form-group ">
                                <Link to="/">
                                    <button type="submit" className="btn btn-info" onClick={this.onSubmit}>SignUp</button>
                                </Link>
                                <button type="reset" className="btn btn-warning mx-2">Cancel</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const style = {
    card: {
        width: "25rem"
    }
}
const mapStateToProps = (state)=>{
    return{
        newUser: state.user
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return{
        signUp: (user) => {
            return dispatch(actions.signUpRequest(user));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Signup));