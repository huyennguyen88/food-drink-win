import React, { Component } from 'react'
import Login from './LogSign'
export default class SubMenu extends Component {
    constructor(props)
    {
        super(props)
    }
    render() {
        return (
            <div className="SubMenu d-flex justify-content-between my-3">
                <div>
                    <form className="form-inline my-2 my-lg-0">
                        <select className="form-control mr-1 " id="sel1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                <Login changepage = {this.props.changepage}></Login>
            </div>
        );
    }
}