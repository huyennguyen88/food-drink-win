import React, { Component } from 'react'
export default class Login extends Component {
    render() {
        return (
            <>
                <div className='login-form'>
                    <div className="form-group row">
                        <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" style ={style.email} className="form-control-plaintext" id="staticEmail" placeholder="Email@example.com"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                           <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                        <div id ="mail" className ="d-flex mx-2"><button className="btn btn-warning" onClick = {this.log}>Login</button></div>
                        <div id ="pass" className ="d-flex"><button className="btn btn-outline-warning" onClick = {this.fn}>Cancel</button></div>
                    </div>
                </div>
            </>
        )
    }
}
const style = {
    email:{
        padding:"0.375rem 0.75rem"
    }
}