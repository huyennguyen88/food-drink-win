import React, { Component } from 'react'
import callApi from './../../../../utils/apiCaller'
import {
 Link
} from 'react-router-dom';
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: '',
            isLogged: false,
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
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        callApi("users/sign_in","POST",{
            email: this.state.email,
            password: this.state.password
        }).then(res=>{
            
            console.log(res)
        })
    }
    render() {
        return (
            <div className="Login container">
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
                                <button onClick={this.onSubmit}type="submit" className="btn btn-info">Login</button>
                                <button type="reset" className="btn btn-warning mx-2">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
const style={
    card: {
        width:"25rem"
    }
}