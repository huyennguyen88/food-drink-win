import React, { Component } from 'react'
import TopNav from './TopNav.jsx'
import Main from './Main'
import Footer from './Footer'
import Login from './Loginpage/Login'
import Signup from './Loginpage/Signup'
export default class Homepage extends Component {
    constructor(props)
    {
        super(props)
        this.state ={
            ispage: "home",
        }
    }
    callback = (data) =>
    {
        this.setState({ispage:data})
    }
    Checkpage = () =>
    {
        switch(this.state.ispage){
            case "home":
                return <Main/>
            case "login":
                return <Login parentCallback ={this.callback}/>
            case "signup":
                return <Signup parentCallback ={this.callback}/>
        }
    }
    render() {
        return (
            <div>
                <TopNav parentCallback ={this.callback}/>
                {
                    this.Checkpage()
                }
                <Footer/>
            </div>
        )
    }
}
