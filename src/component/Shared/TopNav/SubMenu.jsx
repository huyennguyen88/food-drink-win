import React, { Component } from 'react'
import Login from './LogSign'
export default class SubMenu extends Component {
    render() {
        return (
            <div className="SubMenu d-flex justify-content-between my-3">
                <div>
                    <form className="form-inline my-2 my-lg-0">
                        <div className="input-group ">

                            <div className="input-group-prepend">
                                <select className="custom-select border-success" defaultValue={1}>
                               
                                    <option value={1}>20.000-50.000</option>
                                    <option value={2}>50.000-100.000</option>
                                    <option value={3}>Trên 100.000</option>
                                </select>
                                <select className="custom-select border-success" defaultValue={1}>
                              
                                    <option value={1}>Food</option>
                                    <option value={2}>Drink</option>
                                </select>

                            </div>
                            <input type="text" className="form-control border-success" placeholder="I want to eat..." aria-label="Text input with dropdown button" />
                        </div>
                        <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                <Login changepage = {this.props.changepage}></Login>
            </div>
        );
    }
}