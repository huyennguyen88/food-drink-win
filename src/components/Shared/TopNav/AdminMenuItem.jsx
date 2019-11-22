import React from 'react';
import {Link} from 'react-router-dom'
class AdminMenuItem extends React.Component {
    render() {
        var {name} = this.props
        return (
        <Link className="dropdown-item text-success" to={"/admin/"+name.toLowerCase()}>{name}</Link>
        );
    }
}
export default AdminMenuItem;
