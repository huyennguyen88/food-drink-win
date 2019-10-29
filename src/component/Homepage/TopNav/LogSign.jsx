import React, { Component } from 'react'

export default class Login extends React.Component{
    constructor(props){super(props)}
    fn = () =>
    {   
        this.props.changepage("login");
    }
    fn2 = () =>
    {
        this.props.changepage("signup");
    }
    render()
    {
        return(
            <div className="d-flex flex-row justify-content-end">
                    <div className="d-flex mx-2">
                        <button type="button" className="btn btn-warning" onClick = {this.fn}>Login</button>
                    </div>
                    <div className="d-flex ">
                        <button type="button" className="btn btn-outline-warning" onClick ={this.fn2}>Sign up</button>
                    </div>
            </div>
        )
    }
}
