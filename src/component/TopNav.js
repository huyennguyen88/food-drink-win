import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import './TopNav.css';
import Main from './Main';
class TopNav extends React.Component {
    render() {
        return (
            <div className="TopNav">
                <Menu />
                <SubMenu />
            </div>
        );
    }
}
class Menu extends React.Component {
    render() {
        return (
            <Router>
                <div className="Menu">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand">
                            <img className="d-inline-block align-top" src="./image/logo.png"></img>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className=" collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-4">
                                <li className="h4 ml-4 nav-item active">
                                    <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="h4 ml-4 nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="h4 ml-4 nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Food</a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li className="h4 ml-4 nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Drink</a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </Router>

        );
    }
}
class SubMenu extends React.Component {
    render() {
        return (
            <div className="SubMenu d-flex justify-content-between my-3">
                <div>
                    <form className="form-inline my-2 my-lg-0">
                        <div className="input-group ">

                            <div className="input-group-prepend">
                                <select class="custom-select border-success">
                                    <option selected>Price</option>
                                    <option value="1">20.000-50.000</option>
                                    <option value="2">50.000-100.000</option>
                                    <option value="3">Trên 100.000</option>
                                </select>
                                <select class="custom-select border-success">
                                    <option selected>Type</option>
                                    <option value="1">Food</option>
                                    <option value="2">Drink</option>
                                </select>

                            </div>
                            <input type="text" className="form-control border-success" placeholder="I want to eat..." aria-label="Text input with dropdown button" />
                        </div>
                        <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                <div className="d-flex flex-row justify-content-end">
                    <div className="d-flex mx-2">
                        <button type="button" className="btn btn-warning">Login</button>
                    </div>
                    <div className="d-flex ">
                        <button type="button" className="btn btn-outline-warning">Sign up</button>
                    </div>
                </div>

            </div>
        );

    }
}
export default TopNav;