import React, { Component } from 'react'

export default class Logged extends Component {
    constructor(props)
    {
        super(props)
    }
    render() {
        return (
            <div className="d-flex flex-row justify-content-end">
                <div className="d-flex">
                    <label>ueihgnurt@gmail.com</label>
                </div>
                <div className="d-flex mx-2">
                    <button className="btn btn-outline-warning" onClick = {this.log}>Logout</button>
                </div>
            </div>
        )
    }
}