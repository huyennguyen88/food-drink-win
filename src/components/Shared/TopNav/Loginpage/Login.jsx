import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './../../../../actions/index'
import { Link,withRouter } from "react-router-dom";
class Login extends Component {
    constructor(props){
        super(props);
        this.state ={
            email: '',
            name: '',
            password: '',
            isLogged: false,
            token: '',
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
        let {email,password} = this.state
        await this.props.logIn(email,password)
        let {user} = this.props.state
        if(user === null || user.authentication_token === undefined)  
        {
            alert("invalid email or password")
            return;
        }
        else{
            this.setState({
                email: user.email,
                name: user.name,
                isLogged: true,
                password: '???????',
                token: user.authentication_token
            })
            // user = null;
            // console.log(user)
            this.props.history.push("/");
        }
        
    }
    checkLogin = ()=>{
        let token = localStorage.getItem('token');
        if (token === null) return false;
        return true;
    }
    render() {
        
        return (
            <div className="Login container">
                {
                    !this.checkLogin()? 
                    <div className="card mx-auto text-center mb-3" style={style.card} >
                    <div className="card-header bg-info h3">Login</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-user" /> </span>
                                    </div>
                                    <input onKeyUp={this.onChange} name="email"className="form-control" placeholder="Enter email" type="email" />
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
                            <div className="form-group ">
                                <Link to="/profile"><button onClick={this.onSubmit}type="submit" className="btn btn-info" >Login</button></Link>
                                <button type="reset" className="btn btn-warning mx-2">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
                 :
                 <h1>Dang nhap roi</h1>
                }

               </div>

        )
    }
}
const style={
    card: {
        width:"25rem"
    }
}
const mapStateToProps = (state)=>{
    return{
        state: state
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return{
        logIn: (email,password) => {
            return dispatch(actions.logInRequest(email,password));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter((Login)));
