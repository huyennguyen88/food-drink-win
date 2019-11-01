import React, { Component } from 'react'

export default class Signup extends Component {
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
                                    <input name="email" className="form-control" placeholder="Enter email" type="email" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                                    </div>
                                    <input className="form-control" placeholder="Enter password" type="password" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                                    </div>
                                    <input className="form-control" placeholder="Refill password" type="password" />
                                </div>
                            </div>
                            <div className="form-group ">
                                <button type="submit" className="btn btn-info">SignUp</button>
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