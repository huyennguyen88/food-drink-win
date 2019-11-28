import React from 'react';
import {
    Link,
    useParams
} from 'react-router-dom';

class Item extends React.Component {
    
    render() {
            return (
    
                <div className="Item col-lg-3 col-md-6 mb-4">
                    <div className="card h-100 border-warning">
                        <Link to={"/products/"+this.props.id}><img className="card-img-top" style={style} src={this.props.img} alt="" /></Link>
                        <div className="card-body">
                            <h4 className="card-title ">
                                <Link to={"/products/"+this.props.id}>{this.props.name}</Link>
                            </h4>
                            <p className="h5 text-danger">${this.props.price}</p>
                            <p className="card-text">BuyNow</p>
                        </div>
                        <div className="card-footer bg-warning">
                            <small className="text-muted">★ ★ ★ ★ ☆</small>
                        </div>
                    </div>
                </div>
                
        );
    }
}
export default Item;
const style ={
    height : "190px"
}