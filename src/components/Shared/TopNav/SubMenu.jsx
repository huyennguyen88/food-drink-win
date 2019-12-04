import React, { Component } from 'react'
import LogSign from './LogSign'
import { connect } from 'react-redux'
import LiveSearch from '../../Homepage/LiveSearch'
class SubMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
        }
    }
    componentWillMount() {
        let token = JSON.parse(localStorage.getItem('token'));
        this.setState({
            token: token
        })
    }
    render() {

        return (
            <div className="SubMenu d-flex justify-content-between my-3">
                <LiveSearch/>
                <LogSign />
                
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SubMenu)