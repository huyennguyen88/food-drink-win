import React from 'react';


class Item extends React.Component {
    render() {
        let {product} = this.props
        return (
                 <tr className="row-admin">
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}$</td>
                    <td>{product.classify === true ? "Food" : "Drink"}</td>
                    <td>{product.quantity}</td>
                    <td>{product.description}</td>
                    <td>
                        <button 
                            type="button" 
                            className="btn btn-warning"
                        >Edit
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-danger"
                        >Delete
                        </button>
                    </td>
                </tr>
        );
    }
}
export default Item;