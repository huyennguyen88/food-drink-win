import React, { Component } from 'react'
import TopNav from './TopNav/TopNav.jsx'
import Main from './Main'
import Footer from './Footer/Footer'
import Login from './TopNav/Loginpage/Login'
import Signup from './TopNav/Loginpage/Signup'
import UserProfile from './UserProfile'
export default class Homepage extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            ispage:"home",
        }
    }
    whichpages=(data) => 
    {
        this.setState({ispage:data})
    }
    Checkpage = () =>
    {
        switch(this.state.ispage){
            case "home":
                return <Main/>
            case "login":
                return <Login changepage ={this.whichpages}/>
            case "signup":
                return <Signup changepage ={this.whichpages}/>
        }
    }
    render() {
        
        return (
            <div>
                <TopNav changepage ={this.whichpages}/>
                {
                    this.Checkpage()
                }
                <UserProfile/>
             
                <Footer/>
            </div>
        )
    }
}
