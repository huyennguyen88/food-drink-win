import React, { Component } from 'react'
// import './UserProfileStyle.css';
import {connect} from 'react-redux'
import * as actions from './../../actions/index'

class UserProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            profile: {
                userName: "",
                email: "",
                phone: "",
            }
        }
    }
    componentWillMount(){
        let token = JSON.parse(localStorage.getItem('token'))
        this.props.watchProfile(token);
    }
     componentWillReceiveProps(nextProps){
        let  profile =  nextProps.profile;
        this.setState({
            profile: {
                userName: profile.name,
                email: profile.email,
                phone: profile.phone,
                avatar: profile.avatar
            }   
        },(()=>{
            // console.log(this.state.profile) //callback
        }))
    }
    render() {
        // console.log(this.props.profileInfo)
        let {profile} = this.state
        return (
            <div className="container bootstrap snippet">
                <div className="row">
                    <div className="col-sm-10" style={{marginLeft:"6%"}}><h1>{profile.userName}</h1></div>
                </div>
                <div className="row">
                    <div className="col-sm-4">

                        <div className="text-center">
                            <img src="/image/avatar.jpg"/>
                            
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
                                                    <input type="text" className="form-control" name="name" id="first_name" defaultValue={profile.userName} placeholder="username" title="enter your first name if any." />
                                                </div>
                                            </div>
                                            <div className="form-group">

                                                <div className="col-xs-6">
                                                    <label><h4>Email</h4></label>
                                                    <input type="email" className="form-control" name="email" id="email" defaultValue={profile.email} placeholder="you@email.com" title="enter your email." />
                                                </div>
                                            </div>


                                            <div className="form-group">
                                                <div className="col-xs-6">
                                                    <label><h4>Mobile</h4></label>
                                                    <input type="text" className="form-control" name="mobile" id="mobile" defaultValue={profile.phone} placeholder="enter mobile number" title="enter your mobile number if any." />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-xs-12">
                                                    <br />
                                                    <button className="btn btn-lg btn-success mx-2" type="submit"><i className="glyphicon glyphicon-ok-sign"></i>Save</button>
                                                    <button className="btn btn-warning btn-lg" type="reset"><i className="glyphicon glyphicon-repeat"></i> Reset</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <div className="col-xs-6">
                                                    <label ><h4>Password</h4></label>
                                                    <input type="password" className="form-control" name="password" id="password" placeholder="password" title="enter your password." />
                                                </div>
                                            </div>
                                            <div className="form-group">

                                                <div className="col-xs-6">
                                                    <label><h4>Verify</h4></label>
                                                    <input type="password" className="form-control" name="password2" id="password2" placeholder="password confirmation" title="enter your password2." />
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
      }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(UserProfile)