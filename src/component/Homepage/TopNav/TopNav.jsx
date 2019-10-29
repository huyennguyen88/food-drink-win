import React, { Component } from 'react'
import Menu from './MainMenu'
import SubMenu from './SubMenu'
export default class TopNav extends Component {
    render() {
        return (
            <div className="TopNav">
                <Menu />
                <SubMenu changepage = {this.props.changepage}/>
            </div>
        );
    }
}