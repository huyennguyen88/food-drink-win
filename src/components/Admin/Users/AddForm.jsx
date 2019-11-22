import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../../../actions/index'
import { get } from 'http';

class AddForm extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            id: '',
            userName: '',
            email: '',
            image: '',
            phone: '',
            password: '',
            passwordConfirm: ''
        }
    }
    oncloseForm = ()=>{
        this.props.closeForm();
        this.props.userClear();
    }
    onChange = (e) => {
        let target = e.target;
        let name = target.name
        let value = target.value
        this.setState({
            [name] : value
        })
    }
    onSubmit = async (e)=>{
        e.preventDefault();
        if(this.props.getUser){
            let user = this.state
            let editUser = null;
            if(user.password === ''&& user.passwordConfirm === ''){
                editUser = {
                    
                    userName: user.userName,
                    email: user.email,
                    phone: user.phone
                }
                this.props.userEdit(editUser)
                this.props.closeForm();
            }
            else{
                editUser = user;
                if(user.password !== user.passwordConfirm){
                    alert("password and password confirm is different");
                }
                else{
                    this.props.userEdit(editUser)
                    this.props.closeForm();
                }
            }
        }
        else{
            let user = this.state
            await this.props.signUp(user)
            let newUser = this.props.newUser.user
            var token = JSON.parse(localStorage.getItem('token'))
            if(newUser && newUser.authentication_token !== token){
                this.props.closeForm();
            }
            else{
                alert('invalid password or email')
            }
        }
    }
    componentWillMount(){
        if(this.props.getUser){
            let {getUser} = this.props
            this.setState({
                id: getUser.id,
                userName: getUser.name,
                email: getUser.email,
                image: getUser.avatar,
                phone: getUser.phone,
            })
        }
    }
    render() {
        let {getUser} = this.props
        let user = this.state 
        return (
            <div className="card border-primary add-form">
                <div className="card-body">
                    <h4 className="card-title" style={{textAlign: "center"}}>
                        {getUser? "Update User" : "New User"}
                        <span>
                            <i onClick={this.oncloseForm} className="fas fa-times-circle" style={{float: "right"}}></i>
                        </span>
                    </h4>
                    <form>
                        <span className="label">Name</span>
                        <input
                            defaultValue={user.userName} 
                            onKeyUp={this.onChange}
                            type="text" 
                            name="userName" 
                            className="form-control"
                        />
                        <span className="label">Email</span>
                        <input
                            disabled={getUser? true : false}
                            defaultValue={user.email} 
                            onKeyUp={this.onChange}
                            type="email" 
                            name="email" 
                            className="form-control"
                        />
                        <span className="label">Phone</span>
                        <input
                            defaultValue={user.phone} 
                            onKeyUp={this.onChange}
                            type="text" 
                            name="phone" 
                            className="form-control"
                        />
                        <span className="label">Password</span>
                        <input
                            defaultValue={user.password} 
                            onKeyUp={this.onChange}
                            type="password" 
                            name="password" 
                            className="form-control"
                        />
                        <span className="label">Password confirmation</span>
                        <input
                            defaultValue={user.passwordConfirm} 
                            onKeyUp={this.onChange}
                            type="password" 
                            name="passwordConfirm" 
                            className="form-control"
                        />
                        <div style={style.styleControlBtn}>
                            <button 
                                onClick={this.onSubmit} 
                                type="submit" 
                                className="btn btn-success" 
                                style={style.styleBtn}
                            >Save
                            </button>
                            <button type="reset" className="btn btn-danger" style={style.styleBtn}>Cancel</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        );
    }
}
const style = {
    styleBtn: {
        width: "20%",
        marginRight: "10px"
    },
    styleControlBtn:{
        margin: "3% 0"
    }
}
const mapStateToProps = (state)=>{
    return{
        newUser: state,
        getUser: state.getUser
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return{
        closeForm: ()=>{  
            return dispatch(actions.closeForm());
        },
        userClear: ()=>{
            return dispatch(actions.userClear());
        },
        signUp: (newUser) => {            
            return dispatch(actions.signUpRequest(newUser));
        },
        userEdit: (user)=>{
            return dispatch(actions.userEditRequest(user))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddForm);