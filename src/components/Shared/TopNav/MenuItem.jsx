import React from 'react';
class MenuItem extends React.Component {
    render() {
        var {name} = this.props
        return (
        <a className="dropdown-item text-success" href="abc">{name}</a>
        );
    }
}
export default MenuItem;
