import React from 'react';

class CartItem extends React.Component {
    render() {
        return (
            <>
                <th scope="row" className="border-0">
                    <div className="p-2">
                        <img src="./image/dong1.gif" alt="" width="70" className="img-fluid rounded shadow-sm" />
                        <div className="ml-3 d-inline-block align-middle">
                            <h5 className="mb-0"> <a href="abc" className="text-dark d-inline-block align-middle">Hot Ramen</a></h5><span className="text-muted font-weight-normal font-italic d-block">Category: Noodle</span>
                        </div>
                    </div>
                </th>
                <td className="border-0 align-middle"><strong>$79.00</strong></td>
                <td className="border-0 align-middle"><strong>3</strong></td>
                <td className="border-0 align-middle"><a href="abc" className="text-dark"><i className="fa fa-trash"></i></a></td>
            </>
        );
    }
}
export default CartItem;