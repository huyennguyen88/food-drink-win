import React from 'react';
import {Link} from 'react-router-dom'
class MenuItem extends React.Component {
    render() {
        var {name} = this.props
        return (
        <Link className="dropdown-item text-success" to={"/"+name.toLowerCase()}>{name}</Link>
        );
    }
}
export default MenuItem;
