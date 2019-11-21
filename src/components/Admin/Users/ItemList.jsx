import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../../../actions/index'
import Item from './Item';
class ItemList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }
    componentWillMount(){
        this.props.fetchUsers();
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            users: nextProps.users
        })
    }
    render() {
        let sort = this.props.sortUserType
        let {users} = this.state;
        let {searchKeyUser} = this.props
        users = users.filter((p,i)=>{
            return p.name.toLowerCase().indexOf(searchKeyUser.toLowerCase()) !== -1;
        })
        if(sort.by === 'name'){
            users.sort((a,b)=>{
                a.name = a.name.toLowerCase();
                b.name = b.name.toLowerCase();
                if(a.name > b.name) return sort.value;
                else if(a.name < b.name) return -sort.value;
                else return 0;
            })
        }
        else if(sort.by === 'email'){
            users.sort((a,b)=>{
                a.email = a.email.toLowerCase();
                b.email = b.email.toLowerCase();
                if(a.email > b.email) return sort.value;
                else if(a.email < b.email) return -sort.value;
                else return 0;
            })
        }
        let listUsers = users.map((u,i)=>{
            return(
                <Item user={u} key={i}/>
            )
        })
        

        return (
            <div className="my-products">
                <table  className="table table-bordered table-hover">
                <thead>
                <tr>
                    <th className="text-center">ID</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Phone</th>
                    <th className="text-center">Option</th>
                </tr>
                </thead>
                <tbody>
                    {listUsers}
                </tbody>
            </table>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return{
        users: state.users,
        searchKeyUser: state.search,
        sortUserType: state.sort
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return{
        fetchUsers: ()=>{
            dispatch(actions.fetchUsersRequest())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemList);