import React from 'react';
import './Item.css';

class Item extends React.Component {

    render() {
        
        return (
            <div className="Item col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="#"><img className="card-img-top" src={this.props.name} alt="" /></a>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href="#">Item One</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">★ ★ ★ ★ ☆</small>
                    </div>
                </div>
            </div>
        );
    }
}
export default Item;