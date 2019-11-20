import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from './../../actions/index'
import img from '../../image/avatar.jpg'
class UserProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            email: "",
            phone: "",
            password: "",
            passwordConfirm: "",
        }
    }
    componentWillMount(){
        let token = JSON.parse(localStorage.getItem('token'))
        this.props.watchProfile(token);
    }
    componentWillReceiveProps(nextProps){
        let  profile =  nextProps.profile;
        this.setState({
                userName: profile.name,
                email: profile.email,
                phone: profile.phone,
                avatar: profile.avatar,
        },(()=>{
            // console.log(this.state.profile) //callback
        }))
    }
    onChange =(e) => {
        let target = e.target
        let name = target.name
        let value = target.value
        this.setState({
            [name]: value
        })
    }
    onSubmit = async (e)=>{
        e.preventDefault();
        let user;
        if(this.state.password !== ''){
            user = this.state;
        }
        else{
             user = {
                userName: this.state.userName,
                email: this.state.email,
                phone: this.state.phone,
            }
        }
        if(user.password !== user.passwordConfirm){
            alert("password to password confirmation ga onaji janai!!!")
            return;
        }
        if(this.state.userName === '' ){
            alert("name can't be blank")
            return;
        }
        else{
            await this.props.updateProfile(user)
            alert("Update sucess")
            this.setState({
                userName: user.userName,
                email: user.email,
                phone: user.phone,
            })
        }
    }
    render() {
        let profile = this.state
        return (
            <div className="container bootstrap snippet">
                <div className="row">
                    <div className="col-sm-10" style={{marginLeft:"7%"}}><h1>My Profile</h1></div>
                </div>
                <div className="row">
                    <div className="col-sm-4">

                        <div className="text-center">
                            <img style={{width: "90%"}} src={img} className="avatar img-circle img-thumbnail" alt="abc"/>
                            
                            <h6>Upload a different photo...</h6>
                            <input type="file" style={{marginLeft: "20%"}}/>
                        </div><hr /><br />

                        <ul className="list-group">
                            <li className="list-group-item text-muted">Activity <i className="fa fa-dashboard fa-1x"></i></li>
                            <li className="list-group-item text-right"><span className="pull-left"><strong>Shares</strong></span> 125</li>
                            <li className="list-group-item text-right"><span className="pull-left"><strong>Likes</strong></span> 13</li>
                            <li className="list-group-item text-right"><span className="pull-left"><strong>Posts</strong></span> 37</li>
                            <li className="list-group-item text-right"><span className="pull-left"><strong>Followers</strong></span> 78</li>
                        </ul>

                        <div className="panel panel-default">
                            <div className="panel-heading mx-2"> Social Media</div>
                            <div className="panel-body">
                                <i className="fab fa-facebook-f fa-2x mx-2"></i>
                                <i className="fab fa-instagram fa-2x mx-2 "></i>
                                <i className="fab fa-twitter fa-2x mx-2"></i>
                                <i className="fab fa-pinterest fa-2x mx-2"></i>
                                <i className="fab fa-google-plus fa-2x mx-2"></i>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-8">
                        <div className="tab-content">
                            <div className="tab-pane active" id="home">
                                <form className="form" action="##" method="post" id="registrationForm">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <div className="col-xs-6">
                                                    <label ><h4>Username</h4></label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        name="userName" 
                                                        defaultValue={profile.userName} 
                                                        placeholder="User name" 
                                                        onKeyUp={this.onChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">

                                                <div className="col-xs-6">
                                                    <label><h4>Email</h4></label>
                                                    <input 
                                                        readOnly  
                                                        type="email" 
                                                        className="form-control" 
                                                        name="email" 
                                                        defaultValue={profile.email} 
                                                        placeholder="you@email.com"
                                                    />
                                                </div>
                                            </div>


                                            <div className="form-group">
                                                <div className="col-xs-6">
                                                    <label><h4>Mobile</h4></label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control"
                                                         name="phone"  
                                                         defaultValue={profile.phone} 
                                                         placeholder="enter mobile number" 
                                                         onKeyUp={this.onChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-xs-12">
                                                    <br />
                                                    <button onClick={this.onSubmit}className="btn btn-lg btn-success mx-2" type="submit">
                                                        <i className="glyphicon glyphicon-ok-sign"></i>Save
                                                    </button>
                                                    <button className="btn btn-warning btn-lg" type="reset">
                                                        <i className="glyphicon glyphicon-repeat"></i> Reset
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <div className="col-xs-6">
                                                    <label><h4>New Password</h4></label>
                                                    <input 
                                                        type="password" 
                                                        className="form-control" 
                                                        name="password"
                                                        placeholder="password" 
                                                        onKeyUp={this.onChange} 
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-xs-6">
                                                    <label><h4>Verify</h4></label>
                                                    <input 
                                                        type="password" 
                                                        className="form-control" 
                                                        name="passwordConfirm"
                                                        placeholder="password confirmation" 
                                                        onKeyUp={this.onChange} 
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </form>

                                <hr />

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
      profile: state.user
    }
  }
  const mapDispatchToProps = (dispatch, props)=>{
    return{
      watchProfile: (token) => {
        dispatch(actions.profileRequest(token));
      },
      updateProfile: (user) => {
        dispatch(actions.updateProfileRequest(user))
      }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(UserProfile)