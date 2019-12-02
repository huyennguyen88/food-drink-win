import React, { Component } from 'react'
import MainMenu from './MainMenu'
import SubMenu from './SubMenu'
export default class TopNav extends Component {
    render() {
        return (
            <div className="TopNav ">
                <MainMenu />
                <SubMenu {...this.props}/>
            </div>
        );
    }
}