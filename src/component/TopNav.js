import React from 'react';
import './TopNav.css';

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
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="h4 ml-4 nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="h4 ml-4 nav-item">
                                <a className="nav-link" href="#">Food</a>
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
        );
    }
}
class SubMenu extends React.Component {
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