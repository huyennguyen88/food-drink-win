import React, { Component } from 'react'

export default class Login extends Component {
    fn = () =>
    {
        this.props.parentCallback("home");
    }
    render() {
        return (
            <>
                <form ClassName='login-form'>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="text" style ={style.email} class="form-control-plaintext" id="staticEmail" placeholder="Email@example.com"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                           <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                        <div className ="d-flex mx-2"><button className="btn btn-warning">Login</button></div>
                        <div className ="d-flex"><button className="btn btn-outline-warning" onClick = {this.fn}>Cancel</button></div>
                    </div>
                </form>
            </>
        )
    }
}
const style = {
    email:{
        padding:"0.375rem 0.75rem"
    }
}