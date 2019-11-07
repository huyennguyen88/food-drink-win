import React from 'react';
import {
    Link
} from 'react-router-dom';

class Item extends React.Component {

    render() {

        return (
    
                <div className="Item col-lg-3 col-md-6 mb-4">
                    <div className="card h-100 border-warning">
                        <Link to="/item" ><img className="card-img-top" src={this.props.name} alt="" /></Link>
                        <div className="card-body">
                            <h4 className="card-title ">
                                <a className="text-success" href="abc">Item One</a>
                            </h4>
                            <p className="h5 text-danger">$24.99</p>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
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