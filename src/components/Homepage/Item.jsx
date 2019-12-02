import React from 'react';
import {
    Link,
} from 'react-router-dom';
import BeautyStars from 'beauty-stars';
import "./Item.css"
class Item extends React.Component {
    render() {
        var { id, name, price, image, rate } = this.props
        return (
            
                <div className="Item col-lg-3 col-md-6 mb-3">
                    <div className="card h-100 border-light">
                        <Link to={"products/"+id}>
                        <img className="card-img-top cardImg"  src={image} alt="" />
                        <div  className="card-body cardBD">
                            <p className="text-success">
                                {name}
                            </p>
                            <p className="h5 text-danger pb-3">${price}</p>
                        </div>
                        <div className="card-footer bg-success">
                            <BeautyStars
                                value={rate}
                                size={13}
                            />
                        </div>
                        </Link>
                        
                    </div>
                </div>
          


        );
    }
}
export default Item;
