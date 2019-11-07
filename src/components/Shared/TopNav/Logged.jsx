import React, { Component } from 'react'

export default class Logged extends Component {
    render() {
        return (
            <div className="d-flex flex-row justify-content-end">
                <div className="d-flex">
                    <label>ueihgnurt@gmail.com</label>
                </div>
                <div className="d-flex mx-2">
                    <button className="btn btn-outline-warning" >Logout</button>
                </div>
            </div>
        )
    }
}